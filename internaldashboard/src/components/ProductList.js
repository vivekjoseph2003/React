import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function ProductList() {
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://worksheet-product.mashupstack.com/product", {
          headers: { Authorization: "Bearer " + user.token },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Product List</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>${p.price}</td>
                <td>{p.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;