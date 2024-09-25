import React from "react";
import Navbar from "../components/Navbar";

const CartPage = () => {
  return (
    <div>
      <header className="header">
        <img
          src="assets/logo1-removebg-preview.png"
          alt="Logo"
          className="logo"
        />
        <div className="companyKaNaam">
          <h2>Evara</h2>
        </div>
        <Navbar />
      </header>
      <div>
        <h1>Cart is currently empty</h1>
        {/* Your cart page content here */}
      </div>
    </div>
  );
};

export default CartPage;
