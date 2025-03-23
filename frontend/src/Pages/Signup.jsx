import React from 'react';
import Navbar from '../Components/Navbar'; // Import the Navbar component
import { Link } from 'react-router-dom'; // For navigation to the Login Page

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Signup Form */}
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            Register
          </h2>

          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-stone-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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

          {/* Signup Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="mt-6 text-center text-stone-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;