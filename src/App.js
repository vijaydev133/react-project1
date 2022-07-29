import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import Home from "./components/Pages/Home/Home";
import Cart from "./components/Pages/Cart/Cart";
import Favourite from "./components/Pages/Favourite/Favourite";
import Detail from "./components/Pages/Details/Detail"
import { setContext } from "./components/Context/Context";
import { initialState } from "./components/Context/reducer";
import { redFunc } from "./components/Context/reducer";
import { useReducer } from "react";
import {Navigate } from "react-router-dom"

function App() {
  const [state, dispatch] = useReducer(redFunc, initialState);
  // console.log(state);
  // console.log(dispatch);
  return (
    <setContext.Provider value={{ state, dispatch }}>
      <div className="App">
        {(state?.isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="favourite" element={<Favourite />}></Route>
         
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="*" element={<Navigate to = {"/"}/>}></Route>
        </Routes>
          ) : (
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="*" element={<Navigate to = "/"/>}></Route>
          
        </Routes>
        ))}
      </div>
    </setContext.Provider>
  );
}

export default App;
