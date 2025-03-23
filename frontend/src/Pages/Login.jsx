import React from 'react';
import Navbar from '../Components/Navbar'; // Import the Navbar component
import { Link } from 'react-router-dom'; // For navigation to the Signup Page

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            Login
          </h2>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-stone-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-stone-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Login
          </button>

          {/* Signup Link */}
          <p className="mt-6 text-center text-stone-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;