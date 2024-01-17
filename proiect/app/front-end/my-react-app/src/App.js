import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import './App.css';
import {Conferences} from './pages/Conferences';

function App() {
  return (
    <div className="App">
      <Conferences/>
    </div>
  );
}

export default App;