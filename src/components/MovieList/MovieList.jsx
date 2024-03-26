import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            {/* <img src={movie.backdrop_path} alt="альтернативный текст" /> */}
            {<Link to="/">{movie.original_title}</Link>}
          </div>
        );
      })}
    </div>
  );
}
