import React from 'react'
import '../CSS/LoginSignup.css'
import { Link } from "react-router-dom";

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email Address' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
        </div>

        <p className="loginsignup-login">
          Already have an account?{" "}
          <Link to="/login" className="login-link">Login here</Link>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
