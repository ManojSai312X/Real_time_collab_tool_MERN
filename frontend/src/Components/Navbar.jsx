import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark"); // Toggle the "dark" class on the HTML element
  };

  return (
    <>
      <header
        className={`w-full flex items-center justify-between p-8 sticky top-0 shadow-sm ${
          isDarkMode
            ? "bg-stone-900 text-stone-100" // Dark mode styles
            : "bg-stone-100 text-stone-800" // Light mode styles
        }`}
      >
        {/* Logo Section */}
        <div className="logo flex gap-2 text-xl items-center">
          <span className="font-bold cursor-pointer hover:text-stone-600 transition-colors duration-300">
            <Link to="/">TeamSync</Link>
          </span>
          <span className="hover:text-stone-400 transition-colors duration-300">
            <Link to="/dashboard">DashBoard</Link>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-between gap-6 text-lg items-center">
          {/* Light/Dark Mode Toggle Icons */}
          <button
            onClick={toggleDarkMode}
            className="text-stone-600 hover:text-stone-400 transition-colors duration-300 cursor-pointer"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Login and Register Links */}
          <Link
            to="/login"
            className={`px-4 py-2 hover:text-blue-600 transition-colors duration-300 ${
              isDarkMode ? "text-stone-100" : "text-stone-800"
            }`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Register
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;