import React from 'react'
import '../CSS/LoginSignup.css'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>

        <div className="loginsignup-fields">
          <input type="email" placeholder='Your Email Address' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
        </div>

        <p className="loginsignup-login">
          Don’t have an account?{" "}
          <Link to="/loginsignup" className="login-link">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
