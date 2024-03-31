// import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <div>
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
