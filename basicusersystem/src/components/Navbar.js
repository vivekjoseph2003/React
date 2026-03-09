import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <NavLink to="/register" className={({isActive}) => isActive ? 'active' : ''}>Register</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({isActive}) => isActive ? 'active' : ''}>Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;