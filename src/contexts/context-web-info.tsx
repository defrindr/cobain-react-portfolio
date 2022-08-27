import { createContext } from "react";

export interface IContextWebInfoParams {
    app_name: String | null
}

export interface IContextWebInfo {
    webInfo: IContextWebInfoParams | null
}

export const ContextWebInfoProps = {
    webInfo: {
        app_name: "App Name"
    }
}
export const ContextWebInfo = createContext<IContextWebInfo | null>(ContextWebInfoProps);