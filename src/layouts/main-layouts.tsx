import React, { Fragment, useContext, useEffect, useState } from "react";
import { Footer, Header } from "../components";
import { ContextWebInfo } from "../contexts/context-web-info";
import { Constant } from "../helpers";
const { THEME_HAPPYTHEME, THEME_SADTHEME } = Constant;

/**
 * Declare MainLayoutProps
 */
interface MainLayoutProps {
    children: JSX.Element[] | JSX.Element
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
    const context = useContext(ContextWebInfo);
    const [loadPage, setLoadPage] = useState(true);

    useEffect(() => {
        if (loadPage) {
            // sleep for 1 second
            setTimeout(() => {
                setLoadPage(false);
            }, 1000);
        }
    }, [loadPage]);

    return (
        <Fragment>
            {loadPage &&
                <div className="spinner-overlay">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>}
            <div className={context?.theme === THEME_HAPPYTHEME ? THEME_HAPPYTHEME : THEME_SADTHEME}>
                <Header />
                {children}
                <Footer />
            </div>
        </Fragment >
    );
}