import React from "react";
import { MainLayout } from "../../layouts";
import Awards from "./awards";
import Experience from "./experience";

export default function TentangSaya(): JSX.Element {
    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 text-center">
                        <img src="/images/about.jpeg" alt="fotoku" className="img img-fluid mb-3" />
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12">
                        <p className="display-6">
                            I'm Defri, a Software Developer based in Surabaya, Indonesia.
                        </p>
                        <p>
                            Hi there! I was born and raised in Ponorogo, and currenly i'am based on Surabaya, Indonesia.
                            <br />
                            <br />
                            I'm an experienced developing web using PHP Framework like Yii2, Laravel, and CodeIgniter.
                            I also experienced following code standard community and clean code guide.
                            <br />
                            <br />
                            I always improve my skills and experience day by day.
                            As Steve Jobs said
                        </p>
                        <pre>"still hungry, still foolish"</pre>
                    </div>
                    <div className="col-lg-6">
                        <Experience />
                    </div>
                    <div className="col-lg-6">
                        <Awards />
                        <div className="col-md-12  text-center">
                            <img src="/images/about-2.jpeg" alt="fotoku" className="img img-fluid mt-3" />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}