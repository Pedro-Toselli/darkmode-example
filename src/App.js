// import { useEffect } from 'react';
import './App.css';

function App() {

  const toogleMode = () => {
    document.querySelector('html').classList.toggle('darkmode');
  };

  return (
    <div className='div'>

      <h1> Simple dark mode example </h1>

      <label className="switch">
        <input id='dark-mode' type="checkbox" onChange={() => toogleMode()}/>
        <span className="slider round"></span>
      </label>

    </div>
  );
}

export default App;
