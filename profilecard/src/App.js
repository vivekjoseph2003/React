import React from "react";
import image from "./images/1.jpg";

function App() {
  let name = "Harry";
  let description = "A Solid Center Back";

  let cardStyle = {
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div style={cardStyle}>
        <h2>{name}</h2>
        <p>{description}</p>
  <img src={image} alt="Internal" 
    style={{
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "2px solid #333",
  }}/>
  <img src="https://i.pinimg.com/236x/07/64/3e/07643edad57571a8ee0f0175afb41582.jpg" alt="External" 
    style={{
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "2px solid #333",
  }}
/>
      </div>
    </div>
  );
}

export default App;