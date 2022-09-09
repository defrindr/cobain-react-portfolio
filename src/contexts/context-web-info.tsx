import { createContext } from "react";

export interface IPortfolio {
    name: string,
    description: string,
    role: string,
    year: number,
    urlPlaystore: string,
    urlWebsite: string,
    carausel: string[],
}

export interface IAward {
    title: string
    subtitle: string
    starttime: Date
    endtime: Date
    description: string
}

export interface IExperience {
    title: string,
    subtitle: string,
    starttime: Date,
    endtime: Date,
    description: string,
}

export interface ISocialAccount {
    name: string,
    url: string,
    icon: string
}

export interface IHomepage {
    intro: string,
    link_cv: string,
    link_image: string
}

export interface IPortfoliopage {
    title: string,
    subtitle: string,
    portfolio: IPortfolio[],
}

export interface IContactpage {
    image: string,
    intro: string,
    social_title: string,
    social_description: string,
    social_account: ISocialAccount[],
    email_title: string,
    email_description: string,
    email_bussiness: ISocialAccount[],
}

export interface IAboutpage {
    image: string,
    intro: string,
    description: string,
    quotes: null | string,
    image2: string,
    awards: IAward[],
    experiences: IExperience[],
}

export interface IContextWebInfoParams {
    app_name: string,
    homepage: IHomepage,
    portfoliopage: IPortfoliopage,
    contactpage: IContactpage,
    aboutpage: IAboutpage,
}

export interface IContextWebInfo {
    webInfo: IContextWebInfoParams,
    theme: string,
    setTheme: (t: string) => void,
}

export const ContextWebInfoProps: IContextWebInfo = {
    webInfo: {
        app_name: "",
        homepage: {
            intro: "",
            link_cv: "",
            link_image: ""
        },
        portfoliopage: {
            title: "",
            subtitle: "",
            portfolio: [
                {
                    name: "",
                    description: "",
                    role: "",
                    year: 0,
                    urlPlaystore: "",
                    urlWebsite: "",
                    carausel: [],
                }
            ]
        },
        contactpage: {
            image: "",
            intro: "",
            social_title: "",
            social_description: "",
            social_account: [{
                name: "",
                url: "",
                icon: ""
            }],
            email_title: "",
            email_description: "",
            email_bussiness: [{
                name: "",
                url: "",
                icon: ""
            }],
        },
        aboutpage: {
            image: "",
            intro: "",
            description: "",
            quotes: "",
            image2: "",
            awards: [{
                title: "",
                subtitle: "",
                starttime: new Date(),
                endtime: new Date(),
                description: "",
            }],
            experiences: [{
                title: "",
                subtitle: "",
                starttime: new Date(),
                endtime: new Date(),
                description: "",
            }],
        },
    },
    theme: "",
    setTheme: (theme: string) => { },
}

export const ContextWebInfo = createContext<IContextWebInfo>(ContextWebInfoProps);
