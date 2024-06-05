import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import useAuth from './hooks/useAuth';
import AuthForm from './AuthForm';
import '../style/login.css';


function Login() {
  const { setUser } = useAuthContext();
  const { username, setUsername, password, setPassword, error, handleAuth } = useAuth('http://localhost:3001/login');

  const handleSubmit = async () => {
    await handleAuth();
    setUser({ username });
  };

  return (
    <AuthForm
      title="Login"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      showInviteCode={false}
      error={error}
    />
  );
}

export default Login;
