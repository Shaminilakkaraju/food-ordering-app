import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      setError('Username and password are required');
      return;
    }
    
    navigate('/Home');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          className="input-field" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <br />
        <label htmlFor="password">Password:</label>
        <div className="password-input-container">
          <input 
            type={passwordVisible ? "text" : "password"} 
            id="password" 
            className="input-field" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <FontAwesomeIcon 
            icon={passwordVisible ? faEyeSlash : faEye} 
            className="password-toggle" 
            onClick={togglePasswordVisibility} 
          />
        </div>
        <br />
        <button type="submit" className="login-button1">Login</button>
      </form>
      <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default Login;
