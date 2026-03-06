import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand">
        <h4>Book Manager</h4>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              to="/books"
              className={(status) =>
                "nav-link " + (status.isActive ? "active" : "")
              }
            >
              Books
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/books/create"
              className={(status) =>
                "nav-link " + (status.isActive ? "active" : "")
              }
            >
              Add Book
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;