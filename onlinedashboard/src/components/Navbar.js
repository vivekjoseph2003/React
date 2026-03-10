import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Navbar(){

 const user = useSelector(store=>store.auth.user)
 const dispatch = useDispatch()
 const navigate = useNavigate()

 function logout(){
    dispatch(removeUser())
    navigate("/login")
 }

 return(
   <div>

     <Link to="/products">Products</Link>

     {user ?
        <button onClick={logout}>Logout</button>
      :
        <>
         <Link to="/login">Login</Link>
         <Link to="/register">Register</Link>
        </>
     }

   </div>
 )
}

export default Navbar