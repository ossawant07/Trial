import React from "react";
import Navbar from "../components/Navbar";

const Wishlist = () => {
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
        <h1>Wishlist is currently empty</h1>
      </div>
    </div>
  );
};

export default Wishlist;