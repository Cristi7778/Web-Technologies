import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Conferences} from './pages/Conferences';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="app-title">View the conferences!</div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/conferences" element={<Conferences/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;