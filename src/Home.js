import React from "react"
import Nav from './Nav';
import Products from "./Products.json"
import Book from "./Book";


export default function Home(){
    let cartArr = []
  let card =   Products.map(product=>{
    let id = product.id
    cartArr.push(id)
    console.log(cartArr);
   return <Book key={product.id} prod = {product}/>
   
  })
    
    
    return(
        <main>
            <Nav/>
            
            <div className="home-container">
                {card}
            </div>
        </main>
    )
}