import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    
    <Router>
      <div>
       

        <Navbar/>
        <Routes>
          <Route path="/live-games">
          </Route>
          <Route path="/my-bets">
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
