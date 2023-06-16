import React from "react";
import { modals } from "../constants/modals";


const Reklamacia = () => {
    return (
        <div className="popup-inner_content place-self-center" >
            <h2>Сообщить о рекламации</h2>
            <p>Если Вам стало известно о рекламации на препарат компании АстраЗенека (подозрение к качеству или подлинности), пожалуйста, сообщите эту информацию в медицинский отдел:</p>
            <p className="font-bold">Сделать это Вы можете по телефону:</p>
            <p><a className="text-pink" href="tel:+74957995699">8 (495) 799-56-99</a></p>
            <p className="font-bold">По электронной почте:</p>
            <p><a className="text-pink underline hover:no-underline" href="mailto:ProductQuality.ru@astrazeneca.com">ProductQuality.ru@astrazeneca.com</a></p>
            <p className="mt-16">Номер одобрения: {modals.number_odobr}. Дата одобрения: {modals.date_odobr}. Дата истечения:{modals.date_finish}</p>
        </div>
    )
}

export default Reklamacia;