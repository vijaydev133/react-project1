import React from "react";
import Nav from "./Nav";
import Products from "./Products.json";
import Book from "./Book";

function Cart() {
  let cartItems = JSON.parse(localStorage.getItem("cartArr")) || [];

  console.log(cartItems);

  let item = cartItems.map((item) => {
  return  (Products.map((product) => {
      if (item == product.id) {
        console.log(product.name);
       return <div key= {product.id} className="book-container">
       <img
         src={product.img}
         alt=""
       />
       <p>{product.name}</p>
     
     </div>
      }
    }))
  })


  return (
    <div>
      <Nav />
      <h1>Cart</h1>
      <div className="cart-container">
      {item}
      </div>
      
    </div>
  );
}

export default Cart;
