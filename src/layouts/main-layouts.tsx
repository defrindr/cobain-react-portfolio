import React, { Fragment } from "react";
import { Footer, Header } from "../components";

/**
 * Declare MainLayoutProps
 */
interface MainLayoutProps {
    children: JSX.Element[] | JSX.Element
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}