import '../Assets/Signup.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:9009/home/reg', formData);
        console.log('Response:', response.data);
        alert('Sign up successful!');
        window.location.href = '/Home';
      } catch (error) {
        console.error('Error:', error.response.data);
        alert('Sign up failed. Please try again.'); // Example error handling
        if (error.response && error.response.data) {
          setErrors({ ...errors, general: error.response.data });
        }
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!values.contact) {
      errors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(values.contact)) {
      errors.contact = 'Contact number is invalid';
    }
    return errors;
  };

  return (
    <div className="signin-signup-container">
      <div className="message">
        "Connecting you with trusted medical experts for<br/><br/>
        personalized care."YOUR BETTER LIFE STARTS<br/><br/>
        <span className="center-here">HERE!"</span>
      </div>
      <div className="form-container">
        <h2>Sign Up</h2>
        {errors.general && <p className="error">{errors.general}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
          <div>
            <label>Contact Number</label>
            <input
              type="text"
              name="contact"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            {errors.contact && <p>{errors.contact}</p>}
          </div>
          <div className='center-button'>
            <button type="submit">Sign Up</button>
          </div>
          <div>
            <p style={{ color: 'black', fontSize: '15px' }}>
              If you already have an account: <Link to="/Login" className="login-link">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
