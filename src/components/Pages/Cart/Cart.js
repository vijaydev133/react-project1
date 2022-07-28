import React, { useContext } from "react";
import Nav from "../../assets/Nav";
import Products from "../../assets/Products.json";
// import Book from "../../../assets/Book";
import { setContext } from "../../Context/Context";
//localStorage.setItem("cartArr",JSON.stringify(cartArr))
function Cart() {
  // let cartItems = JSON.parse(localStorage.getItem("cartArr")) || [];
  let { state, dispatch } = useContext(setContext);

  // console.log(cartItems);
  const rmvCart = (val) => {
    let res = state.CartArr.filter((el) => el !== val);
    dispatch({
      type: "rmvCart",
      payLoad: res,
    });
  };

  let item = state.CartArr.map((item) => {
    return Products.map((product) => {
      if (item === product.id) {
        // console.log(product.name);
        return (
          <div key={product.id} className="book-container">
            <img src={product.img} alt="" />
            <p>{product.name}</p>
            <button onClick={() => rmvCart(product.id)}>(-)</button>
          </div>
        );
      }
    });
  });

  return (
    <div>
      <Nav />
      <h1>Cart</h1>
      <div className="cart-container">{item}</div>
    </div>
  );
}

export default Cart;
