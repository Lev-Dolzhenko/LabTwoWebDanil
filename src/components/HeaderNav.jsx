import React from "react";

const HeaderNav = ({ setIsPopup, isPopup, isPopupAcc, setIsPopupAcc }) => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item">
          <a className="header__link" href="#!">
            Home
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#!">
            About
          </a>
        </li>
        <li className="header__item">
          <button
            onClick={() => setIsPopupAcc(true)}
            className="header__link"
            href="#!"
          >
            Account
          </button>
        </li>
        <li className="header__item">
          <a className="header__link" href="#!">
            Contacts
          </a>
        </li>
        <li className="header__item">
          <button
            onClick={() => setIsPopup(!isPopup)}
            className="header__link"
            href="#!"
          >
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
