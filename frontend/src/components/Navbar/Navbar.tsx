// css
import "./Navbar.css";
// components
import { Link } from "react-router-dom";
import {useState} from 'react'

const Navbar = () => {
  const [user, setUser] = useState({
    payload: {},
    isOnline:false,
  })
 
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Hazut Bet
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                
                to="/"
                className="nav-link "
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/my-bets" className="nav-link">
                My Bets
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/live-games" className="nav-link">
                Live Games
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/favorites" className="nav-link">
                Favorites
              </Link>
            </li>
          </ul>
            <div className="d-flex p-2 gap-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search For Game"
              aria-label="Search"
            />
          </form>
          <button
            className="btn btn-outline-primary my-2 my-sm-0 text-uppercase font-weight-bold"
            type="submit"
            >
                <Link  to="/login" className="nav-link">
                Login
              </Link>
          </button>
          <button
            className="btn btn-outline-primary my-2 my-sm-0 text-uppercase font-weight-bold"
            type="submit"
            >
               <Link  to="/sign-up" className="nav-link">
               Sign Up
             </Link>
          </button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
