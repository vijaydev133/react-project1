import React from 'react'
import Nav from './Nav'
import Products from "./Products.json"

function Favourite() {
  let cartItem = JSON.parse(localStorage.getItem("favArr")) || [];

  console.log(cartItem);

  let item = cartItem.map((item) => {
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
        <Nav/>
        <h1>Favourites</h1>
        <div className="fav-container">
        {item}
        </div>
        
    </div>
  )
}

export default Favourite