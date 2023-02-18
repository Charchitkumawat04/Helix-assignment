import './App.css';
import React, { useState } from 'react';
import AuthenticatedComponent from './MyComponents/question.js';

function Login() {
  const handleClick = () => {
    window.location.href = <AuthenticatedComponent></AuthenticatedComponent>;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here, e.g. checking credentials
    // If authentication is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleBack = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    // Render the login form if the user is not authenticated
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  } else {
    // Render the authenticated component with a back button
    return (
      <div>
        <h1>Authenticated Component</h1>
        <p>You are logged in!</p>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleClick}>Go to Other Component</button>      
      </div>
    );
  }
}

export default Login;