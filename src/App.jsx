import { useState } from "react";

import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Header from "./sections/Header";
import Popup from "./components/Popup";
import PopupAcc from "./components/PopupAcc";

function App() {
  const [cart, setCart] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [isPopupAcc, setIsPopupAcc] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
      <Header
      name={name}
        isPopupAcc={isPopupAcc}
        setIsPopupAcc={setIsPopupAcc}
        setIsPopup={setIsPopup}
        isPopup={isPopup}
      />
      <Gallery cart={cart} setCart={setCart} />
      <Popup cart={cart} isPopup={isPopup} setIsPopup={setIsPopup} />
      <PopupAcc
        name={name}
        setName={setName}
        isPopupAcc={isPopupAcc}
        setIsPopupAcc={setIsPopupAcc}
      />
      <Footer />
    </>
  );
}

export default App;
