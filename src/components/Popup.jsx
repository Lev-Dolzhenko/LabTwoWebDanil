import React from "react";

import closeIcon from "../assets/close.svg";

const Popup = ({ cart, isPopup, setIsPopup }) => {
  return (
    <div className={`popup ${isPopup ? "" : "none"}`}>
      <ul className="popup__list">
        {cart?.map((savedItem) => (
          <li key={savedItem.id} className="popup__item">
            <div className="popup__item_image">
              <img src={savedItem.image} alt={savedItem.title} />
            </div>
            <div className="popup__item_title">
              <h4 className="title4">{savedItem.title}</h4>
            </div>
          </li>
        ))}
        <li className="popup__button-buy">
          <button>Arrange</button>
        </li>
      </ul>
      <button
        onClick={() => setIsPopup(!isPopup)}
        className="popup__button-close"
      >
        <img src={closeIcon} alt="close Icon" />
      </button>
    </div>
  );
};

export default Popup;
