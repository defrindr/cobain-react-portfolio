import React from "react";
import { MainLayout } from "../../layouts";

export default function Kontak(): JSX.Element {
    const socialMedia = [
        {
            name: "Github",
            url: "https://github.com/defrindr",
            icon: "fab fa-github"
        },
        {
            name: "Linkedin",
            url: "https://linkedin.com/in/defrindr",
            icon: "fab fa-linkedin"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/defrindr",
            icon: "fab fa-instagram"
        },
        {
            name: "Facebook",
            url: "https://facebook.com/defrindr",
            icon: "fab fa-facebook"
        }
    ];
    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-1 mt-2">
                        <img src="/images/contact.jpg" alt="Contact" className="img img-fluid" style={{ border: 'none' }} />
                    </div>
                    <div className="col-md-6 mt-5">
                        <p className="display-6 mb-3">Hi, Defri here. The best way to contact me depends upon the nature of your inquiry. So…</p>
                    </div>
                    <div className="col-md-8 mt-3">
                        <h3 className="display-4">
                            <strong>Social</strong>
                        </h3>
                        <p>
                            I'm always open to new opportunities and new ideas.
                        </p>
                        <div className="row">
                            {socialMedia.map((item, index) => (
                                <div className="col-sm-6 mb-4" key={index}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="mybtn btn-block">
                                        <i className={item.icon}></i> {item.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h3 className="display-4">
                            <strong>Bussiness</strong>
                        </h3>
                        <p>
                            You also can contact me via email.
                        </p>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <a href="mailto:defrindr@gmail.com" className="mybtn btn-block">
                                    <i className="fas fa-envelope"></i> Email Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}