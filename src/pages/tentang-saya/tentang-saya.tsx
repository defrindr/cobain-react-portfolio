import React, { useContext } from "react";
import { ContextWebInfo } from "../../contexts/context-web-info";
import { MainLayout } from "../../layouts";
import Awards from "./awards";
import Experience from "./experience";

export default function TentangSaya(): JSX.Element {
    const context = useContext(ContextWebInfo);
    const aboutpage = context.webInfo.aboutpage;
    
    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 text-center mt-4">
                        <img src={aboutpage.image} alt="fotoku" className="img img-fluid mb-3" />
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 mt-4">
                        <p className="display-6">
                            {aboutpage.intro}
                        </p>
                        <p>
                            {aboutpage.description.split("\n").map((item, index) => (
                                <span key={index}>
                                    {item}
                                    <br />
                                </span>
                            ))}
                        </p>
                        <pre>"{aboutpage.quotes}"</pre>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <Experience data={aboutpage.experiences} />
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="col-md-12  text-center">
                            <img src={aboutpage.image2} alt="fotoku" className="img img-fluid mt-3" />
                        </div>
                        <Awards data={aboutpage.awards} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}