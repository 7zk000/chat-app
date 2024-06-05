import React, { useState, useEffect } from 'react';
import '../style/AuthForm.css';
import ErrorLogger from './ErrorLogger';

function AuthForm({ title, username, setUsername, password, setPassword, inviteCode, setInviteCode, handleSubmit, showInviteCode, error }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`auth-form ${isVisible ? 'visible' : ''}`}>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />
      {showInviteCode && (
        <input
          type="text"
          placeholder="Invite Code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          className="auth-input"
        />
      )}
      <button onClick={handleSubmit} className="auth-button">{title}</button>
      {error && <div className="error-message">{error}</div>}
      <ErrorLogger error={error} />
    </div>
  );
}

export default AuthForm;
