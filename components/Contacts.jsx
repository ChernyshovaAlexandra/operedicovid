import React from "react";


const Contacts = () => {
    return (
        <div className="popup-inner_content place-self-center" >
            <h2>Контактная информация</h2>
            <p>По общим вопросам деятельности компании «АстраЗенека Россия» обращайтесь: </p>
            <p className="font-bold">Сделать это Вы можете по телефону:</p>
            <p><a className="text-pink" href="tel:+74957995699">8 (495) 799-56-99</a></p>
            <p className="font-bold">По электронной почте:</p>
            <p><a className="text-pink underline hover:no-underline" href="mailto:Moscow.reception@astrazeneca.com">Moscow.reception@astrazeneca.com</a></p>
            <p className="font-bold">По адресу:</p>
            <p className="text-pink">125284, Москва, ул. Беговая д. 3, строение 1, Бизнес-центр NordStar Tower</p>
        </div>
    )
};
export default Contacts;