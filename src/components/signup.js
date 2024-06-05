import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useAuth from './hooks/useAuth';
import AuthForm from './AuthForm';
import '../style/signup.css';

function Signup() {
  const { setUser } = useAuthContext();
  const { username, setUsername, password, setPassword, inviteCode, setInviteCode, error, handleAuth } = useAuth('http://localhost:3001/signup');

  const handleSubmit = async () => {
    await handleAuth();
    setUser({ username });
  };

  return (
    <AuthForm
      title="Signup"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      inviteCode={inviteCode}
      setInviteCode={setInviteCode}
      handleSubmit={handleSubmit}
      showInviteCode={true}
      error={error}
    />
  );
}

export default Signup;
