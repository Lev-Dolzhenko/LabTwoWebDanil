import React from "react";

import logotype from "../assets/logotype.svg";
import HeaderNav from "../components/HeaderNav";

const Header = ({ setIsPopup, isPopup, isPopupAcc, setIsPopupAcc, name }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logotype">
            <a href="#!">
              <img src={logotype} alt="logotype" />
              <span>{name}</span>
            </a>
          </div>
          <HeaderNav
            isPopupAcc={isPopupAcc}
            setIsPopupAcc={setIsPopupAcc}
            setIsPopup={setIsPopup}
            isPopup={isPopup}
          />
        </div>
        <div className="header__text">
          <div className="header__title">
            <h1 className="title1">Clothes that make you feel great</h1>
          </div>
          <div className="header__subtitle">
            <p>
              An exclusive boutique offering exquisite outfits, from couture
              masterpieces to fashionable everyday looks embodying style,
              sophistication and self-confidence
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
