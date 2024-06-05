import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (url) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const handleAuth = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, inviteCode }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        navigate('/chat');
      } else {
        const errorMessage = await response.text();
        setError(`サーバーエラー: ${errorMessage}`);
      }
    } catch (error) {
      setError(`ネットワークエラー: ${error.message}`);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    inviteCode,
    setInviteCode,
    error,
    handleAuth,
    user,
  };
};

export default useAuth;
