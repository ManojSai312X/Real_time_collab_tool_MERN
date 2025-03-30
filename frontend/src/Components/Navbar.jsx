import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
    document.body.classList.toggle('light', !newMode);
    localStorage.setItem('darkMode', newMode);
  };

  // Initialize on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark', savedMode);
    document.body.classList.toggle('light', !savedMode);
  }, []);

  return (
    <header className="w-full flex items-center justify-between p-8 sticky top-0 shadow-sm">
      {/* Logo Section */}
      <div className="logo flex gap-2 text-xl items-center">
        <span className={`font-bold cursor-pointer logo-text ${ isDarkMode?'text-[rgba(0,255,0,0.8)]':'text-blue-600'}`}>
          <Link to="/">TeamSync</Link>
        </span>
        <span className="hover:opacity-80 transition-opacity duration-300">
          <Link to="/dashboard" className="text-current">
            DashBoard
          </Link>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-between gap-6 text-lg items-center">
        {/* Light/Dark Mode Toggle Icons */}
        <button
          onClick={toggleDarkMode}
          className="relative p-2 rounded-full focus:outline-none"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <FaSun className={`mode-toggle-icon ${isDarkMode ? ''  : 'hidden'} ${isDarkMode?'hover:text-blue-600 transition-colors':''}`} size={20} />
          <FaMoon className={`mode-toggle-icon ${isDarkMode ? 'hidden' : ''} ${isDarkMode?'':'hover:text-[rgba(0,255,0,0.8)] transition-colors'}`} size={20} />
        </button>

        {/* Login and Register Links */}
        <Link
          to="/login"
          className="px-4 py-2 btn-secondary rounded-lg"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 btn-primary rounded-lg"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;