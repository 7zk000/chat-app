import React from 'react';
import '../style/home.css';
import { useChat } from './hooks';

function Home() {
  useChat();
  return (
    <div className="home">
      <div className="sidebar">
        <h2>Channels</h2>
        <ul>
          <li># general</li>
          <li># random</li>
        </ul>
      </div>
      <div className="chat-area">
        <div className="chat-header">
          <h2># general</h2>
        </div>
        <div className="chat-messages">
          <div className="message">
            <span className="username">User1:</span> Hello!
          </div>
          <div className="message">
            <span className="username">User2:</span> Hi there!
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
      <div className="user-list">
        <h2>Users</h2>
        <ul>
          <li>User1</li>
          <li>User2</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
