import React, { useState, useEffect } from "react";

const Gallery = ({ cart, setCart }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  const saveItem = (dataItem) => {
    setCart((prevDataItem) => {
      console.log(cart);
      return [...prevDataItem, dataItem].filter(
        (item, idx, arr) => arr.indexOf(item) === idx
      );
    });
  };

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__wrapper">
          <div className="gallery__title">
            <h2 className="title2">Your Chose</h2>
          </div>
          <div className="gallery__grid">
            <ul className="gallery__list">
              {data?.map((dataItem) => (
                <li key={dataItem.id} className="gallery__item">
                  <div className="gallery__item_image">
                    <img src={dataItem.image} alt={dataItem.title} />
                  </div>
                  <div className="gallery__item_title">
                    <h4 className="title4">{dataItem.title}</h4>
                  </div>
                  <div className="gallery__item_button">
                    <button onClick={() => saveItem(dataItem)}>buy</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
