import React, { useContext } from "react";
import { ContextWebInfo } from "../../contexts/context-web-info";
import { MainLayout } from "../../layouts";

export default function Kontak(): JSX.Element {
    const context = useContext(ContextWebInfo);
    const contactWebInfo = context.webInfo.contactpage;
    const socialMedia = contactWebInfo.social_account;
    const emailList = contactWebInfo.email_bussiness;
    return (
        <MainLayout>
            <div className="container" style={{ minHeight: 'calc(100vh - 160px)' }}>
                <div className="row">
                    <div className="col-md-4 offset-md-1 mt-2">
                        <img src={contactWebInfo.image} alt="Contact" className="img img-fluid" style={{ border: 'none' }} />
                    </div>
                    <div className="col-md-6 mt-5  align-self-center">
                        <p className="display-6 mb-3">{contactWebInfo.intro}</p>
                    </div>
                    <div className="col-md-7 mt-3">
                        <h3 className="display-4">
                            <strong>{contactWebInfo.social_title}</strong>
                        </h3>
                        <p>
                            {contactWebInfo.social_description}
                        </p>
                        <div className="row">
                            {socialMedia.map((item, index) => (
                                <div className="col-sm-6 mb-4" key={index}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn mybtn btn-block">
                                        <i className={item.icon}></i> {item.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-5 mt-3">
                        <h3 className="display-4">
                            <strong>{contactWebInfo.email_title}</strong>
                        </h3>
                        <p>
                            {contactWebInfo.email_description}
                        </p>
                        <div className="row">
                            {emailList.map((item, index) => (
                                <div className="col-sm-6 mb-4" key={index}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn mybtn btn-block">
                                        <i className={item.icon}></i> {item.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}