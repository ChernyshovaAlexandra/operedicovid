import React, { useEffect, useState } from "react";
import { qa } from "../constants/q-a";
import Accordeon from "./Accordeon";


const FAQ = () => {
    const [loadedContent, load] = useState(false);

    useEffect(() => {
        load(true)
    }, [])
    return (
        <section className="bg-lavender min-[1000px]:p-12 px-6 py-12" id="faq">
            <div className="content mx-auto">
                <div className="min-[1000px]:block gap-4 justify-between">
                    <div>
                        <h2 className="text-blue min-[1000px]:text-black font-bold header-sec">Частые вопросы</h2>
                    </div>
                    <div className="w-full max-[1000px]:-mt-4">
                        {loadedContent && qa.map((q, id) => (
                            <Accordeon key={id} data={q} id={id} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}


export default FAQ;