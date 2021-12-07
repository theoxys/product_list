import React from "react";

export interface PriceData {
  price: number;
  retailPrice: number;
}

const Price = ({ price, retailPrice }: PriceData) => {
  if (price === retailPrice) {
    return (
      <div className="price-tag">
        <h2>${price}</h2>
      </div>
    );
  } else {
    return (
      <div className="price-tag">
        <h2>${retailPrice}</h2>
        <s>${price}</s>
      </div>
    );
  }
};

export default Price;
