import React from "react"
import logo from './logo.svg';
import {NavLink} from "react-router-dom"

export default function Nav(){
    return(
        <nav>
            <div className="nav-left">
                <img src={logo} alt="React-image" width={"100px"}/>
            </div>
            <div className="nav-right">
                <ul>
                    <li>
                    <NavLink to = "/home" style={({isActive})=> isActive ? {color:"red"} : null}>Home</NavLink> 
                    </li>
                    <li>
                       <NavLink to = "/cart" style={({isActive})=> isActive ? {color:"red"} : null}>Cart</NavLink> 
                    </li>
                    <li>
                    <NavLink to = "/favourite" style={({isActive})=> isActive ? {color:"red"} : null}>Favourite</NavLink>   
                    </li>
                </ul>
            </div>
        </nav>
    )
}