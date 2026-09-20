function MovieCard({ movie, onDetails }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.image
            ? movie.image.medium
            : "https://via.placeholder.com/300x400"
        }
        alt={movie.name}
      />

      <div className="movie-info">
        <h3>{movie.name}</h3>

        <div className="movie-meta">
          <span>⭐ {movie.rating?.average || "N/A"}</span>

          <span>
            📅 {movie.premiered ? movie.premiered.slice(0, 4) : "Unknown"}
          </span>
        </div>

        <button className="details-btn" onClick={onDetails}>
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
