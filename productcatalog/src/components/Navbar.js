import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand">
        <h4>Electronics Store</h4>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/products" className={'nav-link'}>
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products/create" className={'nav-link'}>
              Add Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;