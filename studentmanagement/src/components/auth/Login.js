import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import checkGuest from "./checkGuest";

function Login(){

    var [email,setEmail] = useState('');
    var [password,setPassword] = useState('');
    var [errorMessage,setErrorMessage] = useState('');

    const dispatch = useDispatch();

    function attemptLogin(){

        axios.post('https://worksheet-student.mashupstack.com/login',{
            email:email,
            password:password
        }).then(response=>{

            var user = {
                email:email,
                token:response.data.token
            }

            dispatch(setUser(user))

        }).catch(error=>{
            setErrorMessage('Login failed')
        })
    }

    return(

        <div className="container">

            <h2>Login</h2>

            {errorMessage ? <div>{errorMessage}</div> : ''}

            <div>
                <input type="text"
                placeholder="Email"
                value={email}
                onInput={(e)=>setEmail(e.target.value)}
                />
            </div>

            <div>
                <input type="password"
                placeholder="Password"
                value={password}
                onInput={(e)=>setPassword(e.target.value)}
                />
            </div>

            <button onClick={attemptLogin}>Login</button>

        </div>
    )
}

export default checkGuest(Login);