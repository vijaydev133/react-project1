export const initialState = {
  FavArr: [],
  CartArr: [],
  isAuthenticated : JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  // isFav : JSON.parse(localStorage.getItem("isFav")) || []
};

export const redFunc = (state, action) => {
  console.log(state.isFav);
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
      case "login":
      return {
        ...state,
       ...action.payLoad
      };
      case "logout": 
      return{
        ...state,
       ...action.payLoad
      }
    default:
      return {
        state
      };
  }
};

// case "isFav":
// return {...state,
//   ...action.payLoad };