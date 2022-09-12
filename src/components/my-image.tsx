export interface IMyImage {
    src: string;
    alt: string;
    className?: string;
    style: React.CSSProperties;
}
export default function MyImage({ src, alt, className, style }: IMyImage) {
    return (
        <div className={className}>
            <img src={src} className="d-block w-100" alt={alt} style={style} />
        </div>
    );
}