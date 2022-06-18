import './App.css';
import HQContainer from './components/HQContainer';
import comicsList from './components/comicsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HQ Collection</h1>
      </header>
        <div className='content'>
        <HQContainer comicsList={comicsList} />
        </div>
    </div>
  );
}

export default App;
