import { CalendarDays, Star } from "lucide-react";

function MovieCard({ movie, onDetails }) {
  return (
    <article className="movie-card">
      <img
        src={
          movie.image?.medium ||
          "https://via.placeholder.com/300x400?text=No+Image"
        }
        alt={`${movie.name} poster`}
        loading="lazy"
      />

      <div className="movie-info">
        <h3 title={movie.name}>{movie.name}</h3>

        <div className="movie-meta" aria-label="Movie metadata">
          <span>
            <Star size={15} fill="currentColor" aria-hidden="true" />
            {movie.rating?.average || "N/A"}
          </span>

          <span>
            <CalendarDays size={15} aria-hidden="true" />
            {movie.premiered ? movie.premiered.slice(0, 4) : "Unknown"}
          </span>
        </div>

        <button className="details-btn" onClick={onDetails} type="button">
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
