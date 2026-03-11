import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const attemptRegister = () => {
        axios.post('https://worksheet-student.mashupstack.com/register', {
            user_name: name,
            email: email,
            password: password
        }).then(response => {
            setErrorMessage('');
            navigate('/login');
        }).catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Failed to register user. Please contact admin');
            }
        });
    };

    return (
        <div className="container">
            <h1>Register</h1>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary mt-2" onClick={attemptRegister}>Register</button>
            </div>
        </div>
    );
}

export default Register;