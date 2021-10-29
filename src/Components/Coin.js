import React from "react";

export default function Coin({name, image, symbol, price, marketCap, priceChange}) {
  return (
    <div>
      <img src={image} alt={name} />
      <span>{name}</span>
      <span>{symbol.toUpperCase()}</span>
      <span>{price.toLocaleString()}</span>
      <span>{priceChange}</span>
      <span>{marketCap.toLocaleString()}</span>
    </div>
  );
}
