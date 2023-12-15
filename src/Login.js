// src/Login.js

import React, { useState } from 'react';
import Recuperacion from './Recuperacion'; // Asegúrate de haber creado este componente.

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'usuario' && password === 'contraseña') {
      onLogin(true);
      setError(false);
    } else {
      setError(true);
      onLogin(false);
    }
  };

  const handleRecovery = () => {
    setShowRecovery(true);
  };

  if (showRecovery) {
    return <Recuperacion />;
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">Usuario o contraseña incorrectos</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <button type="button" onClick={handleRecovery} className="recovery-button">
          ¿Olvidaste tu contraseña?
        </button>
      </form>
    </div>
  );
}

export default Login;
