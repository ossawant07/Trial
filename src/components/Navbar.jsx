import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <div className="n1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          {/* <li>
            <Link to="/account"><img src="assets\accounts-icon.png" alt="Logo" className="Accounts" width='22px' height='22px' /></Link>
      
          </li> */}
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/thrifting">Thrifting</Link>
          </li>
          <li>
            <Link to="/account">Login</Link> 
          </li>
          </div>
      </ul>
    </nav>
  );
};

export default Navbar;
