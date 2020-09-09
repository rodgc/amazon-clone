import React from "react";
import ProductDisplay from "./ProductDisplay";

import { useStateValue } from "../StateProvider";
import { ADD_TO_BASKET } from "../ActionTypes";

function ProductContainer(props) {
  const [, dispatch] = useStateValue();
  const addToBasket = ({ id, title, image, price, rating }) => {
    dispatch({
      type: ADD_TO_BASKET,
      item: { id, title, image, price, rating },
    });
  };

  return <ProductDisplay addToBasket={addToBasket} {...props} />;
}

export default ProductContainer;
