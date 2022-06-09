import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    document.querySelector('#dark-mode')
      .addEventListener('change', () => {
      document.querySelector('html').classList.toggle('darkmode');
    });

  }, []);

  return (
    <div className='div'>

      <h1>Simple dark mode example</h1>

      <form>
        <input id="dark-mode" class="toggle" type="checkbox" name="Dark mode" role="switch" />
        <label for="dark-mode" class="sr">Dark Mode</label>
      </form>
    </div>
  );
}

export default App;
