import React from "react";

export default function Footer() {
    // get year now
    // add year to copyright in state first time
    const [copyright, setCopyright] = React.useState("");
    // add year to copyright in state everytime when year change

    React.useEffect(() => {
        const year = new Date().getFullYear();
        setCopyright(`Copyright ${year}`);
    }, []);


    return (
        <>
            <div className="container" style={{ overflow: "auto" }}>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-12 mb-0 text-muted text-center">{copyright}</p>
                </footer>
            </div>
        </>
    );
}