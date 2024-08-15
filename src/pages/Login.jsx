import React, { useState } from 'react'
import {Link} from "react-router-dom"
const Login = () => {
  const [userData,setUserData] = useState({
    email:'',
    password:''
    
  })


  const changeInputHandler = (e) =>{
    setUserData(prevState =>{
      return{...prevState, [e.target.name]:e.target.value}
    })
  }
  return (
    <section className="register">
      <div className="container">
        <h2>Sign In</h2>
        <form  className="form login_form">
          <p className="form_error-message">There is an error</p>
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus />
          <input type="password" placeholder='Password' name='name' value={userData.password} onChange={changeInputHandler} />

          <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>Don't Have an Account? <Link to = {"/register"}>Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login