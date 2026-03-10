import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login(){

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function login(){

    axios.post("https://worksheet-product.mashupstack.com/login",{
      email:email,
      password:password
    }).then(response=>{

      const user={
        email:email,
        token:response.data.token
      }

      dispatch(setUser(user))

      navigate("/products")

    }).catch(()=>{
      alert("Login Failed")
    })
  }

  return(
    <div>

      <h2>Login</h2>

      <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}/>

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}/>

      <button onClick={login}>Login</button>

    </div>
  )
}

export default Login