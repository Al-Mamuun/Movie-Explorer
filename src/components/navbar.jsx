import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎬 MovieExplorer</div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/movies">Movies</Link>
      </div>

      <Link to="/movies" className="movie-btn">
        Explore Movies
      </Link>
    </nav>
  );
}

export default Navbar;
