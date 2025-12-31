import React from 'react';
import "./Breadcrums.css";
import arrow_icon from "../../assets/arrow_icon.png";

const BreadCrums = ({ product }) => {
  if (!product) {
    return null; 
  }

  return (
    <div className="breadcrums">
      Home 
      <img src={arrow_icon} alt="arrow" height="10px" />

      Shop 
      <img src={arrow_icon} alt="arrow" height="10px" />

      {product.category} 
      <img src={arrow_icon} alt="arrow" height="10px" />

      {product.name}
    </div>
  );
};

export default BreadCrums;
