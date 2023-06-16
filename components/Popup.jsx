import React, { useRef, useState } from "react";
import Icon from "./Icon";


const Popup = ({ showPopup, popup }) => {
    const ref = useRef(null);
    const [check, setChecked] = useState(0);
    const [result, showResult] = useState(false)

    const checkRes = (e) => {
        e.preventDefault();
        if (check > 0) {
            showResult('risk')
        } else {
            showResult('no-risk')
        }
    }
    return (
        <div className="fixed top-0 w-full popup-container grid place-items-center" style={{ zIndex: 9999 }}>
            <div className={`popup-inner relative xl:p-8 p-4 pt-16 bg-white rounded-lg ${popup === 'opros' ? 'opros' : ''}  ${result ? 'setDisplayPopup' : ''}`}>
                <div className="closebtn absolute top-4 right-4 cursor-pointer" onClick={() => showPopup(false)}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#AAABAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="#AAABAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {result ?
                    <div className="popup-inner_content place-self-center" >
                        <Icon
                            glow={'mx-auto mb-8'}
                            id={0}
                            img={result === 'risk' ? `
                            <svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.81127 11.5946L15.9464 29L31.0815 11.5946" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 15L15.0583 26.3631C15.3743 27.248 16.6257 27.248 16.9417 26.3631L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15.9463 29L15.9463 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                            ` :
                                `<svg class="w-7" viewBox="0 0 29 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4332 35.2991C14.4332 35.2991 17.9078 33.5124 22.6477 28.1523C27.3876 22.7922 27.5 20.1943 27.5 20.1943L14.4332 11.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M14.5668 11.0001L1.5 20.1943C1.5 20.1943 1.61236 22.7922 6.3523 28.1523C11.0922 33.5124 14.5668 35.2991 14.5668 35.2991L14.5668 11.0001Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="bevel"/>
                            <path d="M14.5 35L14.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M27.5 1V20L14.5 11V2L27.5 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M1.5 20V1L14.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                            </svg>
                            `
                            } />
                        <h2 className="normal-case font-bold text-center text-3xl block min-[1000px]:w-10/12 mx-auto mb-8">
                            {result === 'risk' ? `Возможно, Вы находитесь в группе риска тяжелого течения COVID-19` : `Вы скорее всего не находитесь в группе повышенного риска тяжелого течения COVID-19`}
                        </h2>
                        <p className="text-center text-gray min-[1000px]:w-9/12 block mx-auto">
                            {result === 'risk' ? `Обратитесь к специалисту для консультации по поводу дополнительной защиты от коронавирусной инфекции` : `Тем не менее рекомендуем Вам следовать рекомендациям по профилактике коронавирусной инфекции`}
                        </p>
                        <a href="#spectrum_of_protection" onClick={() => {
                            window.scrollTo(0, 2 * window.innerHeight)
                            showPopup(false)
                        }} className="btn w-fit text-white mx-auto mt-8 block">{result === 'risk' ? `О дополнительной защите` : `Методы профилактики`}</a>
                    </div>
                    :
                    <div className="popup-inner_content">
                        <h2 className="font-bold">Узнайте, находитесь ли вы в группе повышенного риска тяжелого течения COVID-19</h2>
                        <p className="text-gray-500 mt-4 mb-8">Имеется ли у Вас одно или более из состояний/заболеваний, перечисленных ниже?</p>
                        <form className="xl:p-6 p-4 bg-white rounded-lg checkpoint-container" ref={ref}>
                            <div className="checkpoint mb-4 flex items-top text-lg xl:text-xl">
                                <input onChange={(e) => {
                                    setChecked(check => e.target.checked ? check + 1 : check - 1)
                                }
                                } className="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check" />
                                <label htmlFor="check"> Онкологическое заболевание (в том числе онкологическое заболевание крови)?</label>
                            </div>
                            <div className="checkpoint my-4 flex items-top text-lg xl:text-xl">
                                <input onChange={(e) =>
                                    setChecked(check => e.target.checked ? check + 1 : check - 1)
                                } className="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check1" />
                                <label htmlFor="check1"> Трансплантация солидного органа (почка, печень и др.) или костного мозга</label>
                            </div>
                            <div className="checkpoint my-4 flex items-top text-lg xl:text-xl">
                                <input onChange={(e) =>
                                    setChecked(check => e.target.checked ? check + 1 : check - 1)
                                } className="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check2" />
                                <label htmlFor="check2"> Хроническая болезнь почек, требующая диализа</label>
                            </div>
                            <div className="checkpoint my-4 flex items-top text-lg xl:text-xl">
                                <input onChange={(e) =>
                                    setChecked(check => e.target.checked ? check + 1 : check - 1)
                                } className="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check3" />
                                <label htmlFor="check3"> Хроническое заболевание (например, сахарный диабет 1 или 2 типа, тяжелая бронхиальная астма, ХОБЛ, сердечно-сосудистое заболевание)</label>
                            </div>
                            <div className="checkpoint my-4 flex items-top text-lg xl:text-xl">
                                <input onChange={(e) =>
                                    setChecked(check => e.target.checked ? check + 1 : check - 1)
                                } className="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check4" />
                                <label htmlFor="check4"> Ревматологическое заболевание, требующее терапии с применением препаратов, подавляющих иммунитет</label>
                            </div>
                            <div className="checkpoint my-4 flex items-top text-lg xl:text-xl">
                                <input onChange={(e) =>
                                    setChecked(check => e.target.checked ? check + 1 : check - 1)
                                } className="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check6" />
                                <label htmlFor="check6"> Первичный иммунодефицит</label>
                            </div>
                            <div className="checkpoint my-4 flex items-top text-lg xl:text-xl">
                                <input onChange={(e) =>
                                    setChecked(check => check)}
                                    className="w-5 h-5 shrink-0 relative check rounded-lg border-gray-200" type="checkbox" name="check" id="check5" />
                                <label htmlFor="check5">Не имеется</label>
                            </div>
                            <button className="btn btn-pink text-white mt-6 z-80 relative" onClick={checkRes}>Проверить</button>
                        </form >

                    </div>}
            </div >
        </div >
    )
}

export default Popup;