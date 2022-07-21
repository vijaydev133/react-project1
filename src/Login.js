import React from "react";
import datas from "./personDetail.json"
import { useNavigate } from "react-router-dom";



export default function Login() {
    let navigate = useNavigate()
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errMsg,setErrMsg] = React.useState("");
  function handleName(event) {
    setName(event.target.value);
  }

  function handlePass(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()
    datas.forEach(data=>{
        if(data.username == name && data.password == password){
            navigate("home")
        }
        else{
            setErrMsg("kindly recheck and type password again")
        }
    })
  }
  return (
    <div className="login-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            id="uname"
            name="username"
            placeholder="username"
            onChange={handleName}
            type="text"
          />

          <input
            id="pass"
            name="password"
            placeholder="password"
            onChange={handlePass}
            type="password"
          />

          <input type="submit" />
        </form>
        <p className="err">{errMsg}</p>
      </div>
    </div>
  );
}
