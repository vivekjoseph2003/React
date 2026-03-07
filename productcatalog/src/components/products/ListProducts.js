import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import ProductListItem from "./ProductListItem";

function ListProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = () => {
    axios
      .get("https://worksheet-catalogue.mashupstack.com/products")
      .then((response) => {
        setAllProducts(response.data);
        setFilteredProducts(response.data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h1>Products</h1>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-success ml-2" onClick={handleSearch}>
            Search
          </button>
        </div>
        <Link to="/products/create" className="btn btn-primary mb-3">
          Add Product
        </Link>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductListItem
              key={product.id}
              product={product}
              refresh={fetchProducts}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ListProducts;