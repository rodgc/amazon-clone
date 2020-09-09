export const initialState = {
  basket: [],
};

export const ActionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };

    default:
      return state;
  }
};

export default reducer;