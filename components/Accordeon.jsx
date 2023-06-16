import React, { useState } from "react";



const Accordeon = ({ data }) => {
    const [opened, setOpened] = useState(false)
    return (
        <div className="accordion-flush bg-white p-8 rounded-xl mb-6 last:mb-0 relative z-40" >
            <h2>
                <button type="button" className={`flex gap-8 justify-between w-full font-medium text-left btn-small ${opened ? 'text-pink' : 'text-black'}`}
                    onClick={() => setOpened(!opened)}
                >
                    <span className="text-xl font-bold">{data.question}</span>
                    {!opened ?
                        <svg className="min-[1000px]:w-6 min-[1000px]:h-6 w-10 h-10 shrink-0 text-pink" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="36" height="36" rx="12" fill="currentColor" />
                            <path d="M8.5 18H28.5" stroke="white" strokeWidth="4" />
                            <path d="M18.5 28L18.5 8" stroke="white" strokeWidth="4" />
                        </svg>
                        :
                        <svg className="min-[1000px]:w-6 min-[1000px]:h-6 w-10 h-10 shrink-0 text-pink" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="36" height="36" rx="12" fill="currentColor" />
                            <path d="M9.75 18L18.5 26.75L27.25 18" stroke="white" strokeWidth="4" strokeLinejoin="bevel" />
                            <path d="M18.5 25.5L18.5 8" stroke="white" strokeWidth="4" />
                        </svg>}

                </button>
            </h2>
            <div className={`${opened ? '' : 'hidden'} text-base answer mt-8`}>
                {data.answer}
            </div>

        </div >
    )
}

export default Accordeon;