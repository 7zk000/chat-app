import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, inviteCode }),
      });

      if (response.ok) {
        navigate('/chat');
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
      title="Signup"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      inviteCode={inviteCode}
      setInviteCode={setInviteCode}
      handleSubmit={handleSignup}
      showInviteCode={true}
      error={error}
    />
  );
}

export default Signup;
