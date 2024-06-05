import React from 'react';
import '../style/AuthForm.css';

function AuthForm({ title, username, setUsername, password, setPassword, inviteCode, setInviteCode, handleSubmit, showInviteCode, error }) {
  return (
    <div>
      <h2>{title}</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {showInviteCode && (
        <input
          type="text"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          placeholder="Invite Code"
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default AuthForm;
