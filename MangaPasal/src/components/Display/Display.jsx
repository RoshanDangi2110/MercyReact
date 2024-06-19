import React from "react";
import "./Display.css";
import arr from "../assets/arrow.png";

const Display = (props) => {
  const { product } = props;
  return (
    <div className="display">
      HOME <img src={arr} alt="" className="ar" /> SHOP
      <img src={arr} alt="" className="ar" />
      {product.category} <img src={arr} alt="" className="ar" /> {product.name}
    </div>
  );
};

export default Display;
