import React, { useContext ,useEffect} from "react";
import { setContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
// let cartArr = []
// let favArr = []

export default function Book(props) {
  const { state, dispatch } = useContext(setContext);
  const navigate = useNavigate()
  //  console.log("ghjk",state);
  // console.log(dispatch);

  const [bgcolor, setBgcolorColor] = React.useState("");
  // const [bool,setBool] = React.useState(false)

  // React.useEffect(()=>{

  //   console.log(bool);
  // },[bool])
 useEffect(()=>{
  if (state.FavArr.includes(props.prod.id)) {
    // console.log("true runs");
    setBgcolorColor("red");
   } else {
  //   // console.log("false runs");
    setBgcolorColor("white");
   }
 }

 )
  


  const addToCart = () => {
    let id = props.prod.id;
    if (state.CartArr.includes(id)) {
    } else {
      dispatch({
        type: "addToCart",
        payLoad: id,
        
      });

      // cartArr.push(id)
      // console.log(cartArr)
      // localStorage.setItem("cartArr",JSON.stringify(cartArr))
    }
  };

  function addToFav() {
    let id1 = props.prod.id;

    if (state.FavArr.includes(id1)) {
    } else {
      // localStorage.setItem("isFav", id1)
      dispatch({
        type: "addToFav",
        payLoad: props.prod.id,
      });
      // dispatch({
      //   type: "isFav",
      //   payLoad : {isFav :true}
      // });
      // setBool(true)
      // console.log(bool);
      // props.prod.isFav = true;
      // favArr.push(id1)
      // console.log(favArr);
      // localStorage.setItem("favArr",JSON.stringify(favArr))
      
    }
  }

  return (
    <div className="book-container">
      <img onClick={()=>navigate(`/detail/${props.prod.id}`)} src={props.prod.img} alt="" />
      <p>{props.prod.name}</p>
      <div className="btns">
        <span className="addCart" title="add to cart" onClick={addToCart}>
          +
        </span>
        <span
          className="addFav"
          style={{ backgroundColor: bgcolor }}
          title="add to Fav"
          onClick={addToFav}
        >
          0
        </span>
      </div>
    </div>
  );
}

//
