import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const data = { email, password };

        axios.post('https://worksheet-auth.mashupstack.com/login', data)
            .then(response => {
                console.log("Token:", response.data.token);
                alert("Successfully Logged In");
                navigate("/welcome");
            })
            .catch(error => {
                if (error.response && error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("Failed to connect to API");
                }
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h2>Login</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;