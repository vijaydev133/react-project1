import React from "react";

export default function Book(props) {
    
  return (
    <div className="book-container">
      <img
        src={props.prod.img}
        alt=""
      />
      <p>{props.prod.name}</p>
      <div className="btns">
        <span className="addCart">+</span>
        <span className="addFav">0</span>
      </div>
    </div>
  );
}
