import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const user = {
            user_name: name,
            email: email,
            password: password
        };

        axios.post('https://worksheet-auth.mashupstack.com/register', user)
            .then(response => {
                alert("Registration Successful");
                navigate('/login');
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message || "Registration failed");
                } else {
                    setErrorMessage("Failed to connect to API");
                }
            });
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-3" onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;