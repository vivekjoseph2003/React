import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const credentials = { email, password };

        axios.post('https://worksheet-auth.mashupstack.com/login', credentials)
            .then(response => {
                const token = response.data.token;
                console.log("Token:", token);
                alert("Successfully Logged In");
                navigate('/welcome');
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message || "Login failed");
                } else {
                    setErrorMessage("Failed to connect to API");
                }
            });
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;