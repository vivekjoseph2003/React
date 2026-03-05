import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Crud from "./Crud";

const router = createBrowserRouter([
    { path: '', element: <Crud/>},
    { path: 'App', element: <App/> },
]);

export default router;