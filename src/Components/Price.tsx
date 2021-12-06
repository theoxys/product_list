import React from "react";
interface PriceData {
  price: number;
  retailPrice: number;
}

export const Price = ({ price, retailPrice }: PriceData) => {
  if (price === retailPrice) {
    return <h2>{price}</h2>;
  } else {
    return (
      <div>
        <h2>{retailPrice}</h2>
        <s>{price}</s>
      </div>
    );
  }
};
