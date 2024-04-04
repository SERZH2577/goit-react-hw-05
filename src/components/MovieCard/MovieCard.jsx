import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className={css.card}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `}
          alt={`"${movie.title}" movie poster`}
          width="240px"
          height="340px"
          className={css.img}
        />
        <h1>{movie.original_title}</h1>
        <p>Rating: {movie.vote_average.toFixed()}</p>
      </div>
    </Link>
  );
}
