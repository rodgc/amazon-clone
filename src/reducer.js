import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./ActionTypes";
export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };
    case REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (baskedItem) => baskedItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove prodcut (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
      
    default:
      return state;
  }
};

export default reducer;
