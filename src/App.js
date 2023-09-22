import './App.css';
import logo from './image/logo.png';
import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';

function App() {
  const [comment, setComment] = useState([
    { id: 1, nickname: '홍길동', detail: '우와!' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const [nickname, setNickname] = useState('');
  const [detail, setDetail] = useState('');

  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setDetail(event.target.value);
  }

  const clickAddbtn = () => {
    alert('게시글이 등록되었습니다.');
  }

  return (
    <div className='layout'>
      <div className='header'>
        <div>3팀</div>
        <div>React</div>
      </div>

      <div className='team'>
        <button className='logobtn'>
          <img className='logo' src={logo} alt="logo" />
        </button>
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
              <div>향후 목표 : 네카라쿠배 FE직무 취업</div>
            </div>
          </div>
        }

        <button onClick={() => setModalOpen(true)} className='member'>
          김광훈
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
              <div>향후 목표 : 네카라쿠배 FE직무 취업</div>
            </div>
          </div>
        }

        <button onClick={() => setModalOpen(true)} className='member'>
          박영석
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
              <div>향후 목표 : 네카라쿠배 FE직무 취업</div>
            </div>
          </div>
        }
      </div>


      <div className='title'>방명록</div>
      <div className='comment'>
        <div className='comment-record'>
          <div>코멘트 기록</div>
        </div>
        <div className='new-comment'>
          <input className='nickname' type='text' value={nickname} onChange={nicknameChangeHandler} placeholder='닉네임' />
          <input className='detail' type='text' value={detail} onChange={detailChangeHandler} placeholder='댓글을 남겨주세요' />
          <button className='addbtn' onClick={() => clickAddbtn()}>게시</button>
        </div>
      </div>
    </div>
  );
}

export default App;