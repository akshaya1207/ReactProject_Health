import React, { useState } from 'react';
import '../Assets/adminlogin.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

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
      console.log('Form submitted', formData);

      
      try {
        const response = await fetch('http://localhost:9009/home/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          console.log(result.message);
          // Check if the username contains '@admin.in'
          if (formData.email.includes('@admin.in')) {
            navigate('/admin'); // Redirect to the admin page
          } else {
            navigate('/Home'); // Redirect to the home page
          }
        } else {
          console.error(result.message);
          alert(result.message); // Display error message
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (values.email.length < 3) {
      errors.email = 'Email must be at least 3 characters';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  return (
    <div className="signin-signup-container">
      <div className="message">
        "Welcome back! Grow your health journey"<br/><br/>
        <span className="center-here">HERE!"</span>
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby="email-error" 
            />
            {errors.email && <p id="email-error" className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              aria-describedby="password-error" 
            />
            {errors.password && <p id="password-error" className="error">{errors.password}</p>}
          </div>
         <button type="submit">Login</button>
        </form>
        <div className="login-signup">
          Don't have an account? <Link to="/Signup" style={{color:"#795cf9"}}>Signup</Link>
        </div>
      </div>
    </div>
  );
}
