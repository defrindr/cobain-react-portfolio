import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts";

export default function Beranda(): JSX.Element {
    return (
        <MainLayout>
            <div className="container" style={{ minHeight: '75vh' }}>
                <div className="row">
                    <div className="col-md-7 offset-md-1">
                        <p className="display-5 mt-3 mb-5">
                            Hey There,
                            <br />
                            I'am Defri Indra Mahardika
                            <br />
                            A <span className="stereotipe">Software Developer</span>
                            <br />
                            Specializing in
                            <br />
                            Backend Development
                            <br />
                        </p>
                        <Link to="/portofolio" className="mybtn me-3 mt-3 mb-3">My Portfolio</Link>
                        <Link to="/portofolio" className="mybtn me-3 mt-3 mb-3">Download CV</Link>
                    </div>
                    <div className="col-md-4 text-center ms-auto mt-4">
                        <div style={{ width: '100%', height: 'auto', overflow: 'hidden', padding: '10px' }}>
                            <img src="/images/home.jpeg" alt="cover beranda" className="img img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}