import './App.css';
import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { useAppSelector} from './redux/hooks'

function App() {

  const user = useAppSelector(state => state.user.data);
  return (
    <Router>
      <div className='container-fluid m-0 p-0'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/games" element={<Home/>}/>
          <Route path="/my-bets" element={<Home/>}/>
          <Route path="/favorites" element={<Home/>} />
          <Route path="/login" element={ user.isOnline? <Navigate to='/'/>:<Login/>}/>
          <Route path="/sign-up" element={ user.isOnline? <Navigate to='/'/>:<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
