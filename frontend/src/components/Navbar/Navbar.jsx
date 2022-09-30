// css
import "./Navbar.css";
// components
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
      <div class="container">
        <Link to="/" className="navbar-brand">
          Hazut Bet
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-bets" className="nav-link">
                My Bets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/live-games" className="nav-link">
                Live Games
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites" className="nav-link">
                Favorites
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search For Game"
              aria-label="Search"
            />
          </form>
          <button
            class="btn btn-outline-primary my-2 my-sm-0 text-uppercase font-weight-bold"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
