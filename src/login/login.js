import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        alert('ログインに失敗しました。');
      }
    } catch (error) {
      console.error('ログインエラー:', error);
      alert('ログイン中にエラーが発生しました。');
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
    />
  );
}

export default Login;
