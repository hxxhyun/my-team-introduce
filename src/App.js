import React, { useState } from 'react';
import './App.css';
import logo from './image/logo.png';

function App() {
  // 상태 변수 초기화
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [usernameInput, setUsernameInput] = useState('');

  // 메시지를 보내는 함수
  const handleSendMessage = () => {
    // 입력값이 공백이 아닌 경우에만 메시지를 추가
    if (inputText.trim() !== '' && usernameInput.trim() !== '') {
      const newMessage = {
        text: inputText,
        isMine: true,
        username: usernameInput,
        timestamp: new Date().toLocaleTimeString(),
      };
      // 이전 메시지 배열에 새 메시지를 추가하고 상태 업데이트
      setMessages([...messages, newMessage]);
      // 입력 필드 초기화
      setInputText('');
    }
  };

  // Enter 키 누를 때 메시지 보내기 함수 호출
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div>
      {/* 네비게이션 바 */}
      <nav className="navbar">
        <div className="navbar_logo">
          <a href=""><img className='logoimg' src={logo} alt="Logo" /></a>
        </div>
      </nav>

      {/* 레이아웃 */}
      <div className='layout'>
        <div className='header'>
          <div className='navbody'>
          </div>
        </div>

        {/* 팀 소개 */}
        <div className='team'></div>
        <div className='teamtitle'>팀원 소개</div>
        <div className='teammate'>
          <button className='member'></button>
          <button className='member'></button>
          <button className='member'></button>
        </div>

        {/* 방명록 */}
        <div className='commenttitle'>방명록</div>
        <div className='comment'>
          <div className='comment-record'>
            {messages.map((message, index) => (
              <div key={index} className='comment-item'>
                <div className="user-name">
                  <span>{message.username}</span>
                </div>
                <div className='user-text'>
                  <span className="message-text">{message.text}</span>
                </div>
                <div className="timestamp">
                  <span>{message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 방명록 입력 */}
        <div>
          <div className='comment-input'>
            {/* 이름 입력*/}
            <input
              className='input-name'
              type="text"
              placeholder="이름"
              value={usernameInput}
              onChange={(event) => setUsernameInput(event.target.value)}
              onKeyPress={handleKeyPress} // Enter 키를 누를 때 handleKeyPress 함수 호출
            />
            {/* 메세지 입력*/}
            <input
              className='input-comment'
              type="text"
              placeholder="방명록을 작성해주세요"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              onKeyPress={handleKeyPress} // Enter 키를 누를 때 handleKeyPress 함수 호출
            />
            {/* 게시 버튼 */}
            <button className='input-button' onClick={handleSendMessage}>게시</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
