import React, { useRef } from 'react'
import './register.scss'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Register = () => {

  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }
 
   const navigateToHome = () => {
     
     navigate("/");
   };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
        <h2>Endless entertainment starts at just ₹ 149. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={navigateToHome}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;