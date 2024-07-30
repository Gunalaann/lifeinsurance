import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import "./Home"
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();

      const user = users.find(user => user.email === username && user.password === password);

      if (user) {
        console.log('Login successful');
        alert('Login successful');
        navigate('./Home');
      } else {
        // Invalid credentials
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="normal">
      <form className="sign"onSubmit={handleSubmit}>
        <label>
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br></br>
        <span onClick={() => {navigate('/home')}}><input type="submit" value="Login" /></span>
        <br />
        <br></br>
        {error && <p className="error">{error}</p>}
        <br />
        <br></br>
        <br></br>
        <span onClick={() => { navigate('/register') }}>Don't have an account? Create one</span>
      </form>
    </div>
  );
};

export default Login;
