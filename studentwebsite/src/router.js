import { createBrowserRouter } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import StudentsList from "./components/students/StudentsList";

const router = createBrowserRouter([
    { path: "", element: <StudentsList /> },
    { path: "/", element: <StudentsList /> },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
]);

export default router;