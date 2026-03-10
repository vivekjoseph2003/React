import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/authSlice";
import axios from "axios";

function Navbar() {
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    if (user) {
      try {
        await axios.post(
          "https://worksheet-product.mashupstack.com/logout",
          {},
          { headers: { Authorization: "Bearer " + user.token } }
        );
      } catch (err) {
        console.log("Logout failed", err);
      }
      dispatch(removeUser());
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand">Electronics Store</div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {!user && (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <li className="nav-item">
              <span className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>
                Logout
              </span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;