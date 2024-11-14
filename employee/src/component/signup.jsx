import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig';  // Import db only as auth is no longer needed
import { doc, setDoc } from 'firebase/firestore'; // Firestore methods
import '../styles/SignUp.css';
import Company from "../assets/OIP__2_-removebg-preview.png";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Create a user document in Firestore
      await setDoc(doc(db, "users", email), {  // Using email as the document ID
        email: email,
        password: password,  // You can store the password but it is not recommended
        createdAt: new Date(),
      });

      alert("User created and added to Firestore!");
    } catch (error) {
      console.error("Error signing up:", error.code, error.message);
      alert("Error creating user: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="signup-header">
          <img
            src={Company}
            alt="Company Logo"
            className="logo"
          />
          <h2>Create an Account</h2>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
