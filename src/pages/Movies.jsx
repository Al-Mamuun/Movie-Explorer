import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (search.trim() === "") {
      setLoading(true);

      fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setLoading(false);
        });

      return;
    }

    setLoading(true);

    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        const searchResults = data.map((item) => item.show);

        setMovies(searchResults);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <section className="movies-section">
      <div className="movies-header">
        <h1>Explore Movies & Shows</h1>

        <p>Discover your favorite movies and TV shows</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a movie or show..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>🔍 Search</button>
      </div>

      {loading ? (
        <div className="loading">
          <p>Loading movies...</p>
        </div>
      ) : (
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
