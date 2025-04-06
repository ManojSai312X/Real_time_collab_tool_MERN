import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const Mainpage = () => {
  const nav = useNavigate();
  const [dart,setDart] = useState(true)
  function toLogin(e) {
    e.preventDefault();
    nav('/login');
  }

  function toSignup(e) {
    e.preventDefault();
    nav('/signup');
  }

  const changeColor = () =>{
    setDart(!dart)
  }

  return (
    <div className="text-center p-8">
      {/* Welcome Heading */}
      <h1 className="text-5xl font-bold mb-6 animate-fade-in">
  Welcome to <span onClick={changeColor} className={ dart?"text-[rgba(0,255,0,0.8)]":"text-blue-600"}>TeamSync</span>
</h1>

      {/* Subheading */}
      <div className="text-current">
        <p className="text-xl mb-8 animate-fade-in delay-100">
          Your go-to platform for seamless real-time collaboration.
        </p>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in delay-200">
          <p className="mb-4">
            TeamSync is designed to help teams work together effortlessly. Whether you're collaborating on documents, sharing ideas, or organizing your thoughts, TeamSync provides all the tools you need to stay productive.
          </p>
          <p>
            Join thousands of users who are already transforming the way they work with TeamSync.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 animate-fade-in delay-300">
        <button 
          className="btn-primary px-8 py-3 rounded-lg shadow-lg font-bold"
          onClick={toSignup}
        >
          Register
        </button>
        <button 
          className="btn-secondary px-8 py-3 rounded-lg shadow-lg font-bold"
          onClick={toLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Mainpage;