import React, { useState } from 'react';
import './Login.css';
import Navbar from "../components/Navbar";

const LoginPg = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

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

      <div className='Forms'>
        <div className="app">
          <div className="form-container">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form>
              {!isLogin && (
                <div className="input-container">
                  <label>Username</label>
                  <input type="text" placeholder="Enter your username" />
                </div>
              )}
              <div className="input-container">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <div className='NahiHaiKya'>
              <p onClick={toggleForm}>
              {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPg;



