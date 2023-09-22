import React, { useState } from 'react';
import './App.css';
import logo from './image/logo.png';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [usernameInput, setUsernameInput] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '' && usernameInput.trim() !== '') {
      const newMessage = {
        text: inputText,
        isMine: true,
        username: usernameInput,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div className='layout'>
      <div className='header'>
        <div className='navbody'>
          <nav className="navbar">
            <div className="navbar_logo">
              <i className="fas fa-blog"></i>
              <a href=""><img className='logoimg' src={logo} alt="Logo" /></a>
            </div>
          </nav>
        </div>
      </div>

      <div className='team'></div>

      <div className='teamtitle'>팀원 소개</div>
      <div className='teammate'>
        <button className='member'></button>
        <button className='member'></button>
        <button className='member'></button>
      </div>

      <div className='commenttitle'>방명록</div>
      <div className='comment'>
        <div className='comment-record'>
          <div className="boxset">
            <div className="namebox">
              {messages.map((message, index) => (
                <div>
                  <span className="username">{message.username}</span>
                </div>
              ))}
            </div>
            <div>
              {messages.map((message, index) => (
                <div key={index} className={message.isMine ? 'mine' : 'other'}>
                  <span className="message-text">{message.text}</span>
                </div>
              ))}
            </div>
            <div className="timebox">
              {messages.map((message) => (
                <div >
                  <span className="timestamp">{message.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='comment-input'>
        <input
            type="text"
            placeholder="이름"
            value={usernameInput}
            onChange={(event) => setUsernameInput(event.target.value)}
          />
          <input
            type="text"
            placeholder="메시지를 입력하세요."
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <button onClick={handleSendMessage}>전송</button>
        </div>
      </div>
    </div>
  );
}

export default App;
