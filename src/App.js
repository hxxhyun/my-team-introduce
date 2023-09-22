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
    <div>
       <nav className="navbar">
            <div className="navbar_logo">
              <a href=""><img className='logoimg' src={logo} alt="Logo" /></a>
            </div>
          </nav>
      <div className='layout'>
      <div className='header'>
        <div className='navbody'>
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
          <div >
            <div className="boxset" >
              <div >
              {messages.map((message, index) => (
                <div key={index} className="username">
                  <span>{message.username}</span>
                </div>
              ))}
            </div>
            <div>
              {messages.map((message, index) => (
                <div key={index} className='usertext'>
                  <span className="message-text">{message.text}</span>
                </div>
              ))}
            </div>
            <div>
              {messages.map((message, index) => (
                <div key={index} className="timestamp">
                  <span >{message.timestamp}</span>
                </div>
              ))}
            </div>
            </div>
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
          <button onClick={handleSendMessage}>게시</button>
        </div>
    </div>
      </div>
      
  );
}

export default App;
