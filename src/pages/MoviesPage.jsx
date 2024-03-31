import { useEffect, useState } from "react";
import { getSearchMovies } from "../apiService/movies";
import SearchForm from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../components/Loader/Loader";
import NotFoundPage from "../pages/NotFoundPage";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState("block");
  // const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  const handelPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query.trim()) return;

    async function getData() {
      try {
        setIsHidden("none");
        setIsLoading(true);

        const data = await getSearchMovies(query, page);
        if (page === 1) {
          console.log(data);
          setMovies(data.results);
        } else {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }
      } catch (error) {
        setMovies([]);
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsHidden("block");
      }
    }
    getData();
  }, [query, page]);

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      <MovieList movies={movies} />

      {movies.length !== 0 && (
        <LoadMoreBtn onClick={handelPage} isHidden={isHidden}>
          Load more
        </LoadMoreBtn>
      )}

      {isLoading && <Loader />}
      {isError && <NotFoundPage />}

      {/* <div>
        {movies.map((movie) => {
          return <div key={movie.id}>{movie.original_title}</div>;
        })}
      </div> */}
    </>
  );
}

// import { getTrendingMovies } from "../apiService/movies";
// import MovieList from "../components/MovieList/MovieList";
// // import css from "./MovieCast.module.css";

// export default function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       try {
//         const data = await getTrendingMovies(movieId, query, page);
//         setMovie(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     getData();
//   }, [movieId]);

//   console.log(movieId);

//   return (
//     <div>
//       <h1>{movieId}</h1>
//       {movie && <MovieList />}
//     </div>
//   );
// }
