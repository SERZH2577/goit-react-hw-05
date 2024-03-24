import { useEffect, useState } from "react";
import { getSearchMovies } from "../apiService/movies";
import SearchForm from "../components/SearchForm/SearchForm";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getSearchMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <SearchForm />
      {/* <div>
        {movies.map((movie) => {
          return <div key={movie.id}>{movie.original_title}</div>;
        })}
      </div> */}
    </>
  );
}
