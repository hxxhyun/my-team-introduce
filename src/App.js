import './App.css';
import logo from './image/logo.png';
import React, { useRef, useState } from 'react';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);

  const modalBackground = useRef();
  const modalBackground2 = useRef();
  const modalBackground3 = useRef();
  const modalBackground4 = useRef();

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [usernameInput, setUsernameInput] = useState('');

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
      setUsernameInput('');
    }
  };

  // Enter 키 누를 때 메시지 보내기 함수 호출
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className='layout'>
      <div className='header'>
        <div>3팀</div>
        <div>React</div>
      </div>

      <div className='team'>
        <button className='logobtn' onClick={() => setModalOpen4(true)}>
          <img className='logo' src={logo} alt="logo" />
        </button>
        {
          modalOpen4 &&
          <div className={'modal-container'} ref={modalBackground4} onClick={e => {
            if (e.target === modalBackground4.current) {
              setModalOpen4(false);
            }
          }}>
            <div className={'modal-content-title'}>
              <div className='team-title'>3X3</div>
              <div>3명이서 3인분씩 하는 3팀!!</div>
            </div>
          </div>
        }
        <div>
          저희 사이트를 방문해주셔서 감사합니다.
        </div>
        <div>
          위 로고를 클릭하시면 저희 팀에 대한 소개를 해드릴 수가 있어요.
        </div>
      </div>

      <div className='title'>팀원 소개</div>
      <div className='teammate'>
        <button onClick={() => setModalOpen(true)} className='member'>
          신희현
        </button>
        {
          modalOpen &&
          <div className={'modal-container'} ref={modalBackground} onClick={e => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}>
            <div className={'modal-content'}>
              <div>신희현</div>
              <div>MBTI : ISTP</div>
              <div>주특기 : Python, Javascript, React</div>
              <div>향후 목표 : 꾸준히 성장해서 프론트엔드 직무 취업</div>
              <a href='https://github.com/hxxhyun'>
                <button className='personal'>Git</button>
              </a>
              <a href='https://notion.so/hxxhyun'>
                <button className='personal'>Blog</button>
              </a>
            </div>
          </div>
        }

        <button onClick={() => setModalOpen2(true)} className='member2'>
          김광훈
        </button>
        {
          modalOpen2 &&
          <div className={'modal-container'} ref={modalBackground2} onClick={e => {
            if (e.target === modalBackground2.current) {
              setModalOpen2(false);
            }
          }}>
            <div className={'modal-content'}>
              <div>김광훈</div>
              <div>MBTI : ISTJ</div>
              <div>주특기 : Javascript, React</div>
              <div>향후 목표 : 프리코스에서 배운 것을 바탕으로 프로젝트를 계속 진행하여 성장하기
              </div>
              <a href='https://github.com/PangPanghoon'>
                <button className='personal'>Git</button>
              </a>
              <a href='https://velog.io/@lostter0813'>
                <button className='personal'>Blog</button>
              </a>
            </div>
          </div>
        }

        <button onClick={() => setModalOpen3(true)} className='member3'>
          박영석
        </button>
        {
          modalOpen3 &&
          <div className={'modal-container'} ref={modalBackground3} onClick={e => {
            if (e.target === modalBackground3.current) {
              setModalOpen3(false);
            }
          }}>
            <div className={'modal-content'}>
              <div>박영석</div>
              <div>MBTI : INTP</div>
              <div>주특기 : Javascript, React</div>
              <div>향후 목표 : 프리코스에서 배운 것으로 나만의 작은 여행 블로그 만들기</div>
              <a href='https://github.com/NerdieBrodie'>
                <button className='personal'>Git</button>
              </a>
              <a href='https://velog.io/@hahays94'>
                <button className='personal'>Blog</button>
              </a>
            </div>
          </div>
        }
      </div>


      <div className='title'>방명록</div>
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
            placeholder="닉네임"
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
  );
}

export default App;