import React from 'react'
import "./Detail.scss"
import Nav from '../../assets/Nav'
import { useParams } from 'react-router-dom'
import Products from "../../assets/Products.json"

const Detail = () => {
    let { id } = useParams();
    console.log(id)
    let res = Products.map(product=>{
        console.log(product.name);
        if(product.id === id){
            return(
                <div key={product.id} className="det-cont">
                    <img src={product.img} alt="" />
                    <h1>{product.name}</h1>
                    <h3>Description</h3>
                    <p>{product.desc}</p>
                </div>
            )
        }
    })
  return (
    <div>
        <Nav/>
       <h1>Details</h1> 
        {res}
    </div>
  )
}

export default Detail