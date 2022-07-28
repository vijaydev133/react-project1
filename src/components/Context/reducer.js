export const initialState = {
  FavArr: [],
  CartArr: [],
};

export const redFunc = (state, action) => {
  // console.log("action",...action.payLoad);
  switch (action?.type) {
    case "addToFav":
      return { ...state, FavArr: [...state.FavArr, ...action.payLoad] };
    case "rmvItem":
      return {
        ...state,
        FavArr: [...action.payLoad],
      };
    case "addToCart":
      return {
        ...state,
        CartArr: [...state.CartArr, ...action.payLoad],
      };
    case "rmvCart":
      return {
        ...state,
        CartArr: [...action.payLoad],
      };
    default:
      return {
        state,
      };
  }
};
