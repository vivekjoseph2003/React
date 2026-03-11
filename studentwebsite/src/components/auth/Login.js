import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import checkGuest from "./checkGuest";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const attemptLogin = () => {
        axios.post('https://worksheet-student.mashupstack.com/login', {
            email: email,
            password: password
        }).then(response => {
            setErrorMessage('');
            const user = {
                email: email,
                token: response.data.token
            };
            dispatch(setUser(user));
            navigate('/'); // redirect to StudentsList
        }).catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Failed to login user. Please contact admin');
            }
        });
    };

    return (
        <div className="container">
            <h1>Login</h1>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="form-group">
                <label>Email:</label>
                <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary mt-2" onClick={attemptLogin}>Login</button>
            </div>
        </div>
    );
}

export default checkGuest(Login);