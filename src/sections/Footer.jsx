import React from "react";

import vk from "../assets/vk.svg";
import insta from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <ul className="footer__list">
            <li className="footer__item footer__item-title">
              Контактная информация
            </li>
            <li className="footer__item">
              <a href="#!">
                Алексеевский район, Северо-Восточный административный округ,
                Москва
              </a>
            </li>
            <li className="footer__item">
              <a href="#!">+7 (666) 444 22-22</a>
            </li>
            <li className="footer__item">
              <a href="#!">mymail@mail.com</a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item footer__item-title">
              Справочные ссылки
            </li>
            <li className="footer__item">
              <a href="#!">Политика конфиденциальности</a>
            </li>
            <li className="footer__item">
              <a href="#!">Условия использования</a>
            </li>
            <li className="footer__item">
              <a href="#!">Доставка и возврат</a>
            </li>
            <li className="footer__item">
              <a href="#!">Часто задаваемые вопросы</a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item footer__item-title">
              Подпишитесь на нас
            </li>
            <li className="footer__item">
              <ul className="footer__sublist">
                <li className="footer__subitem">
                  <a href="#!">
                    <img src={vk} alt="vk" />
                  </a>
                </li>
                <li className="footer__subitem">
                  <a href="#!">
                    <img src={insta} alt="insta" />
                  </a>
                </li>
                <li className="footer__subitem">
                  <a href="#!">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              <a href="#!">Форма подписки на рассылку новостей</a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item footer__item-title">
              Правовая информация
            </li>
            <li className="footer__item">
              <a href="#!">Авторские права</a>
            </li>
            <li className="footer__item">
              <a href="#!">Юридическое наименование</a>
            </li>
            <li className="footer__item">
              <a href="#!">Номер регистрации</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
