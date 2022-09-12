import React, { useContext, useState } from "react";
import { Modal, MyImage } from "../../components";
import { ContextWebInfo, IPortfolio } from "../../contexts/context-web-info";
import { MainLayout } from "../../layouts";
import DetailPortofolio from "./detail-portofolio";

export default function Portofolio(): JSX.Element {
    const context = useContext(ContextWebInfo);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

    const portfolio = context.webInfo.portfoliopage?.portfolio;

    // order by year
    const sortedPortfolio = portfolio?.sort((a, b) => {
        return b.year - a.year;
    });

    const isIterable = (obj: any) => {
        // checks for null and undefined
        if (obj == null) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    const popUpModal = (index: number) => {
        setModalTitle(sortedPortfolio[index].name);
        setModalContent(<DetailPortofolio id={index} data={sortedPortfolio[index]} />);
    }

    const showPortfolio = (sortedPortfolio: IPortfolio[]) => {
        return (
            sortedPortfolio.map((item, index) => (
                <div className="col-lg-4 col-md-6 mb-3 mr-3" key={index}>
                    <div className="card">
                        <MyImage className="mycardimage justify-content-center carousel-item active vh-45"
                            src={item.carausel[0]} alt={item.name}
                            style={{ border: 'none', height: 'auto!important' }} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.role}</p>
                            <span className="mybtn me-2 mt-2" data-bs-toggle="modal" data-bs-target="#detailmodal" onClick={() => popUpModal(index)}>Detail</span>
                        </div>
                    </div>
                </div>
            ))
        );
    }

    const showNoData = () => {
        return (
            <h3>
                No Data
            </h3>
        );
    }

    return (
        <MainLayout>
            <Modal isOpen={true} title={modalTitle} id="detailmodal" content={modalContent} />
            <div className="container">
                <h1 className="display-6">{context.webInfo.portfoliopage?.title}</h1>
                <p className="mb-4">{context.webInfo.portfoliopage?.subtitle}</p>
                <div className="row justify-content-center">
                    {
                        isIterable(sortedPortfolio) ? showPortfolio(sortedPortfolio) : showNoData()
                    }
                </div>
            </div>
        </MainLayout>
    );
}