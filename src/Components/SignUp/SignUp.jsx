import React from 'react'
import signup from "./signup.module.css";
import signupImg from './signupImg.svg'
import google from './google.svg'
export default function SignUp() {
  return (
    <div className={signup.signupContainer}>
      <div className={signup.leftSide}>
        <img src={signupImg} alt="signup" />
      </div>
      <div className={signup.rightSide}>
        <h1>Create and account</h1>
        <p>Enter your details below</p>
        <form className={signup.formPage}>
            <input type="text" placeholder='Name' />
            <input type={'email' || 'number' } placeholder='Email or Phone Number' />
            <input type="password" placeholder='Password' />
            <button className={signup.sendButton}>Create Account</button>
            <button className={signup.google}> <img src={google} alt="google-icon" /> Sign up with Google</button>
            <p className={signup.alreadyAccount}>Already have an account? <a href="#">Log in</a></p>
        </form>
      </div>
    </div>
  )
}
