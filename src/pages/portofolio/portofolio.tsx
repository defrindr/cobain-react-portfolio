import React from "react";
import { MainLayout } from "../../layouts";

export default function Portofolio(): JSX.Element {
    const portfolio = [
        {
            name: "TimApp - Sales Management",
            role: "Core Developer",
            urlPlaystore: "https://play.google.com/store/apps/details?id=com.timapp.salesmanagement",
            urlWebsite: "http://timapp.id",
            carausel: [
                "/images/portfolio/timapp/1.jpeg",
                "/images/portfolio/timapp/2.jpeg",
                "/images/portfolio/timapp/3.jpeg",
                "/images/portfolio/timapp/4.png",
            ]
        },
        {
            name: "Lubuk Linggau - Silampari Smart City",
            role: "Backend Developer",
            urlPlaystore: "https://play.google.com/store/apps/details?id=com.lubuklinggau.smartcity",
            urlWebsite: "http://silamparismartcity.lubuklinggaukota.go.id",
            carausel: [
                "/images/portfolio/silampari/1.png",
                "/images/portfolio/silampari/2.png",
                "/images/portfolio/silampari/3.png",
            ]
        },
        {
            name: "Pens Preneur",
            role: "Developer",
            urlPlaystore: null,
            urlWebsite: "http://kewirausahaan.pens.ac.id/",
            carausel: [
                "/images/portfolio/kewirausahaan/1.png",
                "/images/portfolio/kewirausahaan/2.png",
                "/images/portfolio/kewirausahaan/3.png",
            ]
        },

    ];
    return (
        <MainLayout>
            <div className="container">
                <h1 className="display-6">List of My Portfolio</h1>
                <p className="mb-4">Take a look at some of my best work I put together.</p>
                <div className="row">

                    {portfolio.map((item, index) => (
                        <div className="col-md-6 mb-3 mr-3" key={index}>
                            <div className="card">
                                <div id={'CarouselFade' + index} className="carousel slide carousel-fade p-1" data-bs-ride="carousel">

                                    <div className="carousel-inner">
                                        {item.carausel.map((item, index) => (
                                            <div className={index === 0 ? "carousel-item active" : "carousel-item"} style={{ display: 'flex', width: '100%', height: '320px', verticalAlign: 'middle', overflow: 'hidden' }} key={index}>
                                                <img src={item} className="d-block w-100" alt="..." style={{ border: 'none' }} />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target={'#CarouselFade' + index} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={'#CarouselFade' + index} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>


                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.role}</p>
                                    {
                                        item.urlWebsite &&
                                        <a href={item.urlWebsite} target="_blank" className="mybtn me-2 mt-2">Website</a>
                                    }
                                    {
                                        item.urlPlaystore &&
                                        <a href={item.urlPlaystore} target="_blank" className="mybtn me-2 mt-2">Playstore</a>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout >
    );
}