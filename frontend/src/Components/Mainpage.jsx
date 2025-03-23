import React from 'react';
import { useNavigate } from 'react-router-dom';
const Mainpage = () => {
  const nav = useNavigate()
  function toLogin(e){
    e.preventDefault()
    nav('/login')
  }
  function toSignup(e){
    e.preventDefault()
    nav('/signup')
  }
  return (
    <div className="text-center">
      {/* Welcome Heading */}
      <h1 className="text-5xl font-bold text-stone-800 mb-6 animate-fade-in">
        Welcome to <span className="text-blue-600">TeamSync</span>
      </h1>

      {/* Subheading */}
      <p className="text-xl text-stone-600 mb-8 animate-fade-in delay-100">
        Your go-to platform for seamless real-time collaboration.
      </p>

      {/* Description */}
      <div className="max-w-2xl mx-auto text-stone-700 mb-12 animate-fade-in delay-200">
        <p className="mb-4">
          CollabTool is designed to help teams work together effortlessly. Whether you're collaborating on documents, sharing ideas, or organizing your thoughts, CollabTool provides all the tools you need to stay productive.
        </p>
        <p>
          Join thousands of users who are already transforming the way they work with CollabTool.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 animate-fade-in delay-300">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300" onClick={toSignup}>
          Register
        </button>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-stone-100 transition-colors duration-300 border border-blue-600" onClick={toLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Mainpage;