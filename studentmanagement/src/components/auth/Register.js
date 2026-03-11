import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkGuest from "./checkGuest";

function Register() {

    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function attemptRegister() {
        axios.post('https://worksheet-student.mashupstack.com/api/register', {
            name: name,
            email: email,
            password: password
        }).then(response => {
            setErrorMessage('');
            navigate('/login'); // redirect to login on success
        }).catch(error => {
            if (error.response && error.response.data.errors) {
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            } else if (error.response && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Failed to register user. Please contact admin');
            }
        })
    }

    return (
        <div className="container">
            <h1>Register</h1>
            {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : ''}
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" value={name} onInput={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="text" className="form-control" value={email} onInput={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" value={password} onInput={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary float-right" onClick={attemptRegister}>Register</button>
            </div>
        </div>
    )
}

export default checkGuest(Register);