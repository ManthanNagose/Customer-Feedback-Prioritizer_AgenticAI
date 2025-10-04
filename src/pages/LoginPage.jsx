import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Assume App.css contains the sleek dark theme

const LoginPage = () => {
  const [userRole, setUserRole] = useState(null); // 'customer' or 'employee'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '' // Only needed for employee login
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userRole) {
      alert("Please select 'Log in as Customer' or 'Log in as Employee'.");
      return;
    }

    if (userRole === 'customer') {
      // Logic for customer login (collecting essential info)
      console.log('Customer Login Data:', formData);
      navigate('/feedback/platform'); // Direct to platform selection
    } else if (userRole === 'employee') {
      // In a real app, this calls an API to verify credentials
      if (formData.email === 'employee@company.com' && formData.password === 'securepass') {
        navigate('/dashboard'); // Direct to the Employee Dashboard
      } else {
        alert("Invalid employee credentials.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title">Welcome</h1>
        <p className="subtitle">Customer Feedback Prioritizer</p>
        
        <div className="role-selection">
          <button 
            className={`role-button ${userRole === 'customer' ? 'active' : ''}`} 
            onClick={() => setUserRole('customer')}
            type="button"
          >
            <i className="fas fa-user-friends"></i> Log in as Customer
          </button>
          <button 
            className={`role-button ${userRole === 'employee' ? 'active' : ''}`} 
            onClick={() => setUserRole('employee')}
            type="button"
          >
            <i className="fas fa-briefcase"></i> Log in as Employee
          </button>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          
          {userRole === 'employee' && (
             <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          )}
          
          <button type="submit" className="secure-login-btn">Secure Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
