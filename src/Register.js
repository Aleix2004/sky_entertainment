// src/Login.js

import React, { useState } from 'react';
import Recuperacion from './Recuperacion'; // Asegúrate de haber creado este componente.
import placeholder from './assets/placeholder.png';
import bloque from './assets/wall.png';


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
    <div className="container">
      <div className="barra_iz"></div>

    <div className="login-container">
      <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        
        <div className="fotoplace">
          <img className="imagen"
            src={placeholder}
            alt="Logo"
          />
          <h2 className="login-text"
          
          >
            Register
          </h2>
        </div>
        {error && <p className="error">Usuario o contraseña incorrectos</p>}
        <div className="form-group">
          <label htmlFor="username">Enter your email:</label>
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
        <button type="submit" className="login-button">
          Registrer
        </button>
        <div className="ultimo-boton">
        <button type="button" onClick={handleRecovery} className="recovery-button">
          ¿Olvidaste tu contraseña?
        </button>
        </div>
      </form>
      </div>
    </div>
    <div className="barra_der"></div>
    
    </div>
  );
}

export default Login;
