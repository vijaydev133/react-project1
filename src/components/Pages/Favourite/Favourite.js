import React, { useContext } from "react";
import Nav from "../../assets/Nav";
import Products from "../../assets/Products.json";
import { setContext } from "../../Context/Context";
import {useNavigate} from "react-router-dom"
//localStorage.setItem("cartArr",JSON.stringify(cartArr))
function Favourite() {
  // const [cartItem, setcartItem] = React.useState(JSON.parse(localStorage.getItem("favArr")) || []);

  let { state, dispatch } = useContext(setContext);
  let navigate = useNavigate()
  // console.log("favstate",state);
  // let arr = state.FavArr;
  // console.log("statearr",arr);

  // console.log(cartItem);

  function rmvItem(valu) {
    //   console.log(valu);
    //   let ind = cartItem.findIndex((el) => el == valu);
    //   console.log(ind);
    //   cartItem.splice(ind, 1);//filter
    let res = state.FavArr.filter((el) => el !== valu);
    dispatch({
      type: "rmvItem",
      payLoad: res,
    });

    //   // setcartItem((localStorage.setItem("favArr", JSON.stringify(cartItem))));
    //   setcartItem(localStorage.setItem("favArr",cartItem))
    //   console.log(cartItem);
  }
  //  console.log(cartItem);
  let items = state.FavArr?.map((item) => {
    return Products.map((product) => {
      if (item === product.id) {
        // console.log(product.name);
        return (
          <div key={product.id} className="book-container">
            <img onClick={()=>navigate(`/detail/${product.id}`)} src={product.img} alt="" />
            <p>{product.name}</p>
            <button onClick={() => rmvItem(product.id)}>(-)</button>
          </div>
        );
      }
    });
  });
  return (
    <div>
      <Nav />
      <h1>Favourites</h1>
      <div className="fav-container">
        {/* {cartItem.map((item) => {
          return Products.map((product) => {
            if (item == product.id) {
              console.log(product.name);
              return (
                <div key={product.id} className="book-container">
                  <img src={product.img} alt="" />
                  <p>{product.name}</p>
                  <button onClick={() => rmvItem(product.id)}>(-)</button>
                </div>
              );
            }
          });
        })} */}
        {items}
      </div>
    </div>
  );
}

export default Favourite;
