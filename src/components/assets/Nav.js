import React, {useContext} from "react";
import logo from "./logo.svg";
import { NavLink } from "react-router-dom";
import { setContext } from "../Context/Context";

export default function Nav() {

  const {state,dispatch} = useContext(setContext)
  function logout(){
    localStorage.setItem("isLoggedIn",false)
      dispatch({
        type : "logout",
        payLoad : { isAuthenticated : false}
      })
  }
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="React" width={"100px"} />
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) => (isActive ? { color: "red" } : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={({ isActive }) => (isActive ? { color: "red" } : null)}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourite"
              style={({ isActive }) => (isActive ? { color: "red" } : null)}
            >
              Favourite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={()=>logout()}
              style={({ isActive }) => (isActive ? { color: "red" } : null)}
            >
              logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
