import React from "react";
import Image from "./images/1.jpg";

function App() {
  console.log("React app started");
  let userName = "Harry";
  let headingStyle = {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center"
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center shadow p-4" style={{width: "30rem"}}>
        <h2 style={headingStyle}>
          Welcome to React Learning, {userName}
        </h2>
        <img src={Image} 
          className="img-fluid mx-auto mt-3" 
          style={{width:"200px"}} 
          alt="Internal"
        />
        <img 
          src="https://reactjs.org/logo-og.png" 
          className="img-fluid mx-auto mt-3" 
          alt="External"
        />

        <p className="mt-3 text-success fw-bold">
          This is your first card with images and styles!
        </p>

      </div>
    </div>
  );
}
export default App;