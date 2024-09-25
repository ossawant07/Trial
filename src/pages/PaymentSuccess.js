import React from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <h2 >Payment Successful!</h2>
        <p>Your transaction was completed successfully.</p>
        <button className="btn-home">Go to Homepage</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;