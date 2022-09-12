import MyImage from "./my-image";

interface ICarousel {
    id: string | number;
    items: string[];
    classAddition?: string;
}
export default function Carousel({ id, items, classAddition }: ICarousel) {
    if (classAddition === undefined) {
        classAddition = "mycardimage";
    }

    return (
        <div id={'CarouselFade' + id} className="carousel slide carousel-fade p-1" data-bs-ride="carousel">
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <MyImage className={index === 0 ? classAddition + " justify-content-center carousel-item active vh-45" : classAddition + " justify-content-center carousel-item vh-45"}
                        src={item} alt={"Image " + id}
                        style={{ border: 'none', height: 'auto!important' }} />
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={'#CarouselFade' + id} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#CarouselFade' + id} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}