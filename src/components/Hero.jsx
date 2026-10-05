import { Film } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO MOVIE EXPLORER</p>

        <h1>Discover Your Next Favorite Movie</h1>

        <p className="hero-description">
          Explore amazing movies and TV shows from around the world. Search,
          discover, and find something great to watch.
        </p>

        <Link to="/movies" className="hero-btn">
          <span>Explore Now</span>
          <Film size={20} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
