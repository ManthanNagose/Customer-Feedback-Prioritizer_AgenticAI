import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="page-container thank-you-container">
      <div className="thank-you-box">
        <h1 className="title">Thank You!</h1>
        <p className="message">
          Your valuable feedback has been successfully submitted and is now being prioritized by our team.
        </p>
        <p className="note">
          As a customer, you do not have access to the priority dashboard.
        </p>
        <Link to="/" className="home-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
