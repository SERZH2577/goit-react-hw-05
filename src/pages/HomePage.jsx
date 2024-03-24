import { useEffect, useState } from "react";
import { getTrendingMovies } from "../apiService/movies";
// import { Link } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {movies.map((movie) => {
        return <div key={movie.id}>{movie.original_title}</div>;
      })}
    </div>
  );
}
