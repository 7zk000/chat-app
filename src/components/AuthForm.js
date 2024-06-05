import React from 'react';

function AuthForm({ title, username, setUsername, password, setPassword, inviteCode, setInviteCode, handleSubmit, showInviteCode }) {
  return (
    <div>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {showInviteCode && (
        <input
          type="text"
          placeholder="Invite Code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />
      )}
      <button onClick={handleSubmit}>{title}</button>
    </div>
  );
}

export default AuthForm;
