import { Link, useLocation } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  const location = useLocation();

  return (
    <Link to={`/movies/${movie.id}`} state={location}>
      <div className={css.card}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "https://kartinki.pics/pics/uploads/posts/2022-08/1660722963_10-kartinkin-net-p-fon-dlya-prezentatsii-film-krasivo-10.jpg"
          }
          alt={`"${movie.title}" movie poster`}
          width="240px"
          height="340px"
          className={css.img}
        />
        <h1>{movie.original_title}</h1>
        <p>Rating: {movie.vote_average.toFixed(1)}</p>
      </div>
    </Link>
  );
}
