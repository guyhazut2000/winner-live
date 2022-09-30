import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className='container-fluid m-0 p-0'>
        <Navbar/>
        <Routes>
          <Route path="/live-games" element={<Home/>}/>
          <Route path="/my-bets" element={<Home/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
