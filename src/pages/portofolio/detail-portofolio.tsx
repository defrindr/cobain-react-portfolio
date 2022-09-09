import { Carousel } from "../../components";
import { IPortfolio } from "../../contexts/context-web-info";

export interface IDetailPortofolio {
    id: number,
    data: IPortfolio
}
export default function DetailPortofolio({ id, data }: IDetailPortofolio): JSX.Element {
    return (
        <div>
            <Carousel id={id} items={data.carausel} classAddition="detailportofoliocarouse"></Carousel>
            <div className="pv-3"></div>
            <table className="table table-responsive table-borderless">
                <tbody>
                    <tr>
                        <td>
                            <strong>
                                Project Name
                            </strong>
                        </td>
                        <td>:</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Role As</strong></td>
                        <td>:</td>
                        <td>{data.role}</td>
                    </tr>
                    <tr>
                        <td><strong>Year</strong></td>
                        <td>:</td>
                        <td>{data.year}</td>
                    </tr>
                </tbody>
            </table>
            <p className="text-secondary ps-1">
                {
                    data.description.split('\n').map((item, index) => {
                        return (
                            <>
                                <span>{item}</span><br />
                            </>
                        )
                    })
                }
            </p>
            {

                data.urlPlaystore || data.urlWebsite ? (
                    <>
                        <div className="pt-4">
                            <h5>Link Project </h5>
                            {
                                data.urlPlaystore ?
                                    <a href={data.urlPlaystore} target="_blank" rel="noopener noreferrer" className="me-1 mb-1">
                                        <button className="btn btn-outline-primary">
                                            <i className="fab fa-google-play"></i> Play Store
                                        </button>
                                    </a>
                                    : null
                            }
                            {
                                data.urlWebsite ?
                                    <a href={data.urlWebsite} target="_blank" rel="noopener noreferrer" className="me-1 mb-1">
                                        <button className="btn btn-outline-primary">
                                            <i className="fas fa-globe"></i> Website
                                        </button>
                                    </a>
                                    : null
                            }
                        </div>
                    </>
                ) : null

            }
        </div>


    )
}