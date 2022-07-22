import React from "react"
import Nav from './Nav';
import Products from "./Products.json"
import Book from "./Book";


export default function Home(){
    
  let card =   Products.map(product=>{
    
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