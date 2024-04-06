import MovieCard from "../MovieCard/MovieCard";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
