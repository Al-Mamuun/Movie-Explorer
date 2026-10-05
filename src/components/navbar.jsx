import { Film } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" className="logo">
        <Film size={28} strokeWidth={2} aria-hidden="true" />
        <span>MovieExplorer</span>
      </Link>

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
