import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const SHOWS_ENDPOINT = "https://api.tvmaze.com/shows";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(SHOWS_ENDPOINT);
        if (!response.ok) throw new Error("Unable to load movies right now.");
        setMovies(await response.json());
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = search.trim();
    setLoading(true);
    setError("");

    try {
      const endpoint = query
        ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
        : SHOWS_ENDPOINT;
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Search failed. Please try again.");
      const data = await response.json();
      setMovies(query ? data.map((item) => item.show) : data);
    } catch (searchError) {
      setError(searchError.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="movies-section">
      <div className="movies-header">
        <h1>Explore Movies &amp; Shows</h1>
        <p>Discover your favorite movies and TV shows</p>
      </div>

      <form className="search-box" onSubmit={handleSearch}>
        <label className="sr-only" htmlFor="movie-search">
          Search for a movie or show
        </label>
        <input
          id="movie-search"
          type="search"
          placeholder="Search for a movie or show..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">
          <Search size={18} aria-hidden="true" />
          <span>Search</span>
        </button>
      </form>

      {loading && (
        <div className="loading" role="status">
          <p>Loading movies...</p>
        </div>
      )}

      {!loading && error && <p className="error-message">{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p className="empty-message">No movies found. Try another search.</p>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDetails={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      )}

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </section>
  );
}

export default Movies;
