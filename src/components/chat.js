import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useChat from './hooks/useChat';
import { useAuthContext } from '../context/AuthContext';
import '../style/chat.css';

function Chat() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { messages, input, setInput, sendMessage } = useChat();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // 認証されていない場合は何も表示しない
  }

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
