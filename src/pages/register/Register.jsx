import React, { useRef } from 'react'
import './register.scss'
import { useState } from 'react';

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }
  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }

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
        ):(<form className="input">
          <input type="password" placeholder="password" ref={passwordRef } />
          <button className="registerButton" onClick={handleFinish}> Start</button>
        </form>)}
      </div>
    </div>
  );
}

export default Register