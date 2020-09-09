import React from "react";
import "./CheckoutProduct.css";

function CheckoutProductDisplay({
  id,
  image,
  title,
  price,
  rating,
  removeFromBasket,
}) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <smal>$</smal>
          <strong>{price}</strong>
        </p>
        <div className="checkoutPorduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="start">
                🌟
              </span>
            ))}
        </div>
        <button onClick={() => removeFromBasket(id)}>Remove form basket</button>
      </div>
    </div>
  );
}

export default CheckoutProductDisplay;
