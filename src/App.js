import './App.css';
import logo from './image/logo.png';


function App() {
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
        <button className='member'>

        </button>
        <button className='member'>

        </button>
        <button className='member'>

        </button>
      </div>

      <div className='title'>방명록</div>
      <div className='comment'>
        <div className='comment-record'>
          코멘트 기록
        </div>
        <div className='new-comment'>
          <input className='nickname' type='text' />
          <input className='detail' type='text' />
          <button className='addbtn'>게시</button>
        </div>
      </div>
    </div>
  );
}

export default App;
