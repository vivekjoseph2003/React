import { createBrowserRouter } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ProductList from "./components/ProductList";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/products", element: <ProductList /> },
  { path: "*", element: <Login /> },
]);

export default router;