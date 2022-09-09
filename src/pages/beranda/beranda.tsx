import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextWebInfo } from "../../contexts/context-web-info";
import { MainLayout } from "../../layouts";

export default function Beranda(): JSX.Element {
    const contex = useContext(ContextWebInfo);

    return (
        <MainLayout>
            <div className="container" style={{ minHeight: 'calc(100vh - 160px)' }}>
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <p className="display-5 mt-3 mb-5">

                            {contex.webInfo.homepage.intro.split("\n").map((item, index) => (
                                <span key={index}>
                                    {item}
                                    <br />
                                </span>
                            ))}
                        </p>
                        <p>
                        <Link to="/portofolio" className="btn mybtn me-3 mt-3 mb-3">My Portfolio</Link>
                        <a target="_blank" rel="noreferrer" href={contex.webInfo.homepage.link_cv} className="btn mybtn me-3 mt-3 mb-3">Download CV</a>
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-12 text-center ms-auto mt-4">
                        <div style={{ width: '100%', height: 'auto', overflow: 'hidden', padding: '10px' }}>
                            <img src={contex.webInfo.homepage.link_image} alt="cover home" className="img img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}