
import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from "./Login"
import Home from './Home';
import Cart from './Cart';
import Favourite from './Favourite';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Login/>}></Route>
        <Route path= "home" element= {<Home/>}></Route>
        <Route path='cart' element= {<Cart/>}></Route>
        <Route path='favourite' element = {<Favourite/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
