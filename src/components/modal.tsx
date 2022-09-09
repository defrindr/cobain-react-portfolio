import React from "react"

interface IModal {
    id: string | undefined,
    isOpen: boolean;
    title: string;
    content: JSX.Element | null;

}

const Modal = function ({ id, isOpen, title, content }: IModal): JSX.Element {
    const modal: JSX.Element = (
        <>
            <div className={`modal fade ${isOpen ? "show" : ""}`} id={id} tabIndex={-1} role="dialog" aria-labelledby="portofolioModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>
                                <strong>
                                    {title}
                                </strong>
                            </h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return modal;
}

export default Modal;