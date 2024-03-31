import { useEffect, useState } from "react";
import { getTrendingMovies } from "../apiService/movies";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import NotFoundPage from "../pages/NotFoundPage";
// import { Link } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setMovies([]);
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <NotFoundPage />}
      <MovieList movies={movies} />
    </>
  );
}
