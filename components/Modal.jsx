import React from "react";



const Modal = ({ close, content }) => {
    return (
        <div className={`fixed top-0 w-full popup-container grid place-items-center 
        ${content[0] === 'contacts' || content[0] === 'reclamacia' || content[0] === 'nezhelat' || content[0] === 'sluzhba' ? '' : 'modal'}`}
            style={{ zIndex: '99999' }}>
            <div className={`popup-inner relative xl:p-8 p-4 pt-16 bg-white rounded-lg`}>
                <div className="closebtn absolute top-4 right-4 cursor-pointer" onClick={() => close(false)}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#AAABAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="#AAABAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {content[1]}
            </div>
        </div>
    )
};

export default Modal;