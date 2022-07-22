import React from "react";
import datas from "./personDetail.json"
import { useNavigate } from "react-router-dom";



export default function Login() {
    let navigate = useNavigate()
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errMsg,setErrMsg] = React.useState("");
  const [passwordType, setPasswordType] = React.useState("password");
  function handleName(event) {
    setName(event.target.value);
  }

  function handlePass(event) {
    setPassword(event.target.value);
  }

  function showPass(){
    if(passwordType == "password"){
      setPasswordType("text")
    }
    else{
      setPasswordType("password")
    }
  
    
  }
  
  function handleSubmit(event){
    event.preventDefault()
    datas.forEach(data=>{
        if(data.username == name && data.password == password){
            navigate("home")
        }
        else{
          if(password === ""){
            setErrMsg("")
          }
          else{
            setErrMsg("kindly recheck and type password again")
          }
            
        }
    })
  }

  
  return (
    <div className="login-container">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          <input
            id="uname"
            name="username"
            placeholder="username"
            onChange={handleName}
            type="text"
          />
          <div className="pass-inp">
          <input
            id="pass"
            name="password"
            placeholder="password"
            onChange={handlePass}
            type = {passwordType}
          />
              <p className="toggle-pass" onClick={showPass}>show</p>
          </div>
          
          <input type="submit" />
        </form>
        <p className="err">{errMsg}</p>
      </div>
    </div>
  );
}
