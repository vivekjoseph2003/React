import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("https://worksheet-product.mashupstack.com/register", {
        user_name: userName,
        email,
        password,
      });
      setErrorMessage("");
      navigate("/login");
    } catch (error) {
      if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Register</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;