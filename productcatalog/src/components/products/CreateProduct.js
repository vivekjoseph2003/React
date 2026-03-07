import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const addProduct = () => {
    axios
      .post("https://worksheet-catalogue.mashupstack.com/products", {
        name,
        price,
        category,
        quantity,
      })
      .then((res) => {
        navigate("/products");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h1>Add Product</h1>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input className="form-control" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button className="btn btn-primary mt-2" onClick={addProduct}>Submit</button>
      </div>
    </div>
  );
}

export default CreateProduct;