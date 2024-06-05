import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const errorMessage = await response.text();
        setError(`サーバーエラー: ${errorMessage}`);
      }
    } catch (error) {
      setError(`ネットワークエラー: ${error.message}`);
    }
  };

  return (
    <AuthForm
      title="Login"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleLogin}
      showInviteCode={false}
      error={error}
    />
  );
}

export default Login;
