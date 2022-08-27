import React, { useContext } from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import { ContextWebInfo } from "../contexts/context-web-info";

export default function Header(): JSX.Element {
    const context = useContext(ContextWebInfo);

    function CustomLink({ children, to, ...props }: LinkProps) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    className={match ? "nav-link active" : "nav-link"}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }


    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light border-bottom-dotted justify-content-between mb-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">{context?.webInfo?.app_name}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <CustomLink to="/">Home</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to="/tentang-saya">About Me</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to="/portofolio">Portfolio</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to="/kontak">Contact</CustomLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}