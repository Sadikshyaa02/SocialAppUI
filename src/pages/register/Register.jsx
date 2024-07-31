import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Social App </h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Social App.
            </span>
          </div>  
              
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Password Again" className="loginInput" />
              <button className="loginButton">Sign Up</button>
              <span className="loginForgot">Already Have an account?</span>
              <button className="loginRegisterButton"> Log in to your account!</button>
            
            </div>
          </div>        

        </div>
      
    </div>
  )
}



