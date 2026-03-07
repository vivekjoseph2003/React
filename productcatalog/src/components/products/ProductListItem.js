import axios from "axios";
import { Link } from "react-router-dom";

function ProductListItem({ product, refresh }) {
  const deleteProduct = () => {
    axios
      .delete(`https://worksheet-catalogue.mashupstack.com/products/${product.id}`)
      .then((res) => {
        alert("Product deleted successfully");
        refresh();
      });
  };

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>{product.name}</h5>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        <p>Quantity: {product.quantity}</p>
        <Link
          to={`/products/${product.id}/edit`}
          className="btn btn-primary mr-2"
        >
          Edit
        </Link>
        <button className="btn btn-danger" onClick={deleteProduct}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductListItem;