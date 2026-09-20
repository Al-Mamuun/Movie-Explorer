function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <img
          className="modal-image"
          src={
            movie.image
              ? movie.image.original
              : "https://via.placeholder.com/500x700"
          }
          alt={movie.name}
        />

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <div className="modal-meta">
            <span>⭐ {movie.rating?.average || "N/A"}</span>

            <span>📅 {movie.premiered || "Unknown"}</span>
          </div>

          <p>
            🎭{" "}
            {movie.genres?.length
              ? movie.genres.join(", ")
              : "Genre unavailable"}
          </p>

          <h3>Overview</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No summary available.",
            }}
          />

          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
