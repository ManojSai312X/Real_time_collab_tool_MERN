import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post(
        'http://localhost:7173/api/auth/signup', // Changed from 5007 to 7173
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      // Store user data and token (you might want to use context or redux here)
      localStorage.setItem('token', response.data.token);

      navigate('/login');
      
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Registration failed');
      } else if (err.request) {
        setError('No response from server - please try again');
      } else {
        setError('Registration failed - please try again');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-8">
        <div className="card p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Register
          </h2>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Username
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your username"
                className="input-field w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input-field w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input-field w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-accent"
                required
                minLength="6"
              />
            </div>

            {/* Signup Button */}
            <button 
              type="submit" 
              className="btn-primary w-full py-2 rounded-lg flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Sign Up'}
            </button>

            {/* Login Link */}
            <p className="mt-6 text-center">
              Already have an account?{' '}
              <Link to="/login" className="link-accent hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;