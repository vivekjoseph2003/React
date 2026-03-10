import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  function register(){

    axios.post("https://worksheet-product.mashupstack.com/register",{
      name:name,
      email:email,
      password:password
    }).then(()=>{
        navigate("/login")
    }).catch(()=>{
        alert("Registration Failed")
    })
  }

  return(
    <div>
      <h2>Register</h2>

      <input placeholder="Name"
      onChange={(e)=>setName(e.target.value)}/>

      <input placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}/>

      <input type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}/>

      <button onClick={register}>Register</button>

    </div>
  )
}

export default Register