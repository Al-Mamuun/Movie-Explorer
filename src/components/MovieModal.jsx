import { CalendarDays, Drama, Star, X } from "lucide-react";
import { useEffect } from "react";

function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [movie, onClose]);

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
      >
        <button
          className="close-btn"
          onClick={onClose}
          type="button"
          aria-label="Close movie details"
        >
          <X size={22} aria-hidden="true" />
        </button>

        <img
          className="modal-image"
          src={
            movie.image?.original ||
            "https://via.placeholder.com/500x700?text=No+Image"
          }
          alt={`${movie.name} poster`}
        />

        <div className="modal-content">
          <h2 id="movie-modal-title">{movie.name}</h2>

          <div className="modal-meta" aria-label="Movie metadata">
            <span>
              <Star size={16} fill="currentColor" aria-hidden="true" />
              {movie.rating?.average || "N/A"}
            </span>
            <span>
              <CalendarDays size={16} aria-hidden="true" />
              {movie.premiered || "Unknown"}
            </span>
          </div>

          <p className="genre-list">
            <Drama size={18} aria-hidden="true" />
            <span>
              {movie.genres?.length
                ? movie.genres.join(", ")
                : "Genre unavailable"}
            </span>
          </p>

          <h3>Overview</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No summary available.",
            }}
          />

          <button className="modal-close-btn" onClick={onClose} type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
