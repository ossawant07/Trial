import React from 'react';

const Header = () =>{
    return(
    <header className="header">
        <img src="assets\logo1-removebg-preview.png" alt="Logo" className="logo" />
        <div className="companyKaNaam">
        <h2>Evara</h2>
        </div>
        
        <nav className="navbar">
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="search">Search</a></li>
                <li><a href="wishlist">Wishlist</a></li>
                <li><a href="cart">Cart</a></li>
                <li><a href="Thrifting">Thrifting</a></li>
                <li><a  href="account">Account</a></li>
                
            </ul>
        </nav>
        </header>
    )
}
export default Header