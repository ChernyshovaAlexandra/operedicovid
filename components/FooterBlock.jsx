import React from "react";

const FooterBlock = ({ modals, showModal }) => {
  return (
    <div>
      <div className="grid gap-12 footer-grid">
        <div className="col">
          <i className="text-lg mb-4 block txt-astra">
            © 2022 «AstraZeneсa». Все права защищены
          </i>
          <p className="mt-2 txt-base">Номер одобрения: {modals.number_odobr}</p>
          <p className="mt-2 txt-base">Дата одобрения: {modals.date_odobr}</p>
          <p className="mt-2 txt-base">Дата истечения: {modals.date_finish}</p>
        </div>
        <div className="col">
          <p className="txt-footer">Контакты</p>
          <p className="txt-base mt-2">ООО «АстраЗенека Фармасьютикалз».</p>
          <p className="txt-base mt-2">123112, г. Москва, 1-й Красногвардейский проезд, д.21, стр.1.</p>
          <p className="txt-base mt-2">Тел.: +7 (495) 799-56-99, факс: +7 (495) 799-56-98</p>
          <p className="txt-base mt-2">
            <a href="www.astrazeneca.ru" className="cursor-pointer hover:underline">
              www.astrazeneca.ru
            </a>
          </p>
        </div>
        <div className="col">
          <p className="txt-footer">Информация</p>
          <p
            className="txt-base mt-2 cursor-pointer hover:underline"
            onClick={() => showModal(["politika", modals.politika])}
          >
            Политика конфиденциальности
          </p>
          <p
            className="txt-base mt-2 cursor-pointer hover:underline"
            onClick={() => {
              window.location.href = "https://policy.cookiereports.com/6a9c2daf-ru.html";
            }}
          >
            Политика использования файлов cookie
          </p>
          <p
            className="txt-base mt-2 cursor-pointer hover:underline"
            onClick={() => showModal(["ogranighenie", modals.ogranich])}
          >
            Ограничения и предупреждения
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
