import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
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
    </div>
  );
};

export default Home;

