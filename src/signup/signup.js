import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // サインアップ処理をここに追加
    navigate('/chat');
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
