import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav className="nav bg-dark p-3">
            <NavLink 
            to="/" 
            className={({isActive}) => "nav-link " + (isActive ? "active-link" : "")}>
                Home
            </NavLink>

            <NavLink 
            to="/about" 
            className={({isActive}) => "nav-link " + (isActive ? "active-link" : "")}>
                About
            </NavLink>

            <NavLink 
            to="/contact" 
            className={({isActive}) => "nav-link " + (isActive ? "active-link" : "")}>
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;