//importing the useState hook from react and also React from react
import React, { useState } from 'react';
import './App.css';//importing App.css file
function App() { // defines a function App which displays the Login and Signup forms
  const [isLogin, setIsLogin] = useState(true);//setting the variables isLogin and setIsLogin to true
  const [isOwner, setIsOwner] = useState(true);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          //button to toggle between login and signup
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={isLogin ? '' : 'active'} onClick={() => setIsLogin(false)}>SignUp</button>
        </div>
        //displaying the conetents in login form when login button is active
        {isLogin ? (
          <div className='form'>
            <h2>Login</h2>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <a href="#">Forgot Password</a>
            <button>Login</button>
          </div>
) : (
  //displaying the conetents in login form when login button is active
  <div className='form'>
    <h2>SignUp</h2>
    <div className='form-toggle'>
      <button className={isOwner ? 'active' : ''} onClick={() => setIsOwner(true)}>Owner</button>
      <button className={isOwner ? '' : 'active'} onClick={() => setIsOwner(false)}>Tenant</button>
    </div>
    {isOwner ? (
      <div className='form'>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='Confirm Password' />
        <button>SignUp</button>
      </div>
    ) : (
      <div className='form'>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='Confirm Password' />
        <input type='text' placeholder='Phone Number' />
        <button>SignUp</button>
      </div>
    )}
  </div>
)}
</div>
</div>
);
}

export default App;
