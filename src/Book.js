import React from "react";
let cartArr = []
let favArr = []
export default function Book(props) {
  
    function addToCart(){
      let id = props.prod.id
     if (cartArr.includes(id)){

     }else{
      cartArr.push(id)
      console.log(cartArr)
      localStorage.setItem("cartArr",JSON.stringify(cartArr))
     }
    
    }

    function addToFav(){
      let id1 = props.prod.id
      if(favArr.includes(id1)){

      }else{
        favArr.push(id1)
        console.log(favArr);
        localStorage.setItem("favArr",JSON.stringify(favArr))
      }
      
    }
    
   
  return (
    <div className="book-container">
      <img
        src={props.prod.img}
        alt=""
      />
      <p>{props.prod.name}</p>
      <div className="btns">
        <span className="addCart" title="add to cart" onClick={addToCart}>+</span>
        <span className="addFav" title="add to Fav" onClick={addToFav}>0</span>
      </div>
    </div>
  );
}
