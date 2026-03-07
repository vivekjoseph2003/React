import { Routes, Route } from "react-router-dom";
import ListProducts from "./products/ListProducts";
import CreateProduct from "./products/CreateProduct";
import EditProduct from "./products/EditProduct";

function Router() {
  return (
    <Routes>
      <Route path="/products" element={<ListProducts />} />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route path="/products/:productId/edit" element={<EditProduct />} />
      <Route path="*" element={<ListProducts />} />
    </Routes>
  );
}

export default Router;