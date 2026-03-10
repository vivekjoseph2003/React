import { createBrowserRouter } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ProductList from "./components/ProductList";
import ViewProduct from "./components/ViewProduct";

const router = createBrowserRouter([
  { path: "/", element: <Login/> },
  { path: "/register", element: <Register/> },
  { path: "/login", element: <Login/> },
  { path: "/products", element: <ProductList/> },
  { path: "/product/:id", element: <ViewProduct/> }
])

export default router;