import { useEffect, useState } from "react";
import { getSearchMovies } from "../../apiService/movies";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState("block");
  const [isError, setIsError] = useState(false);

  const movieSearch = params.get("query") ?? "";

  const handleSearch = (query) => {
    console.log(query);
    setPage(1);
    setMovies([]);
    params.set("query", query);
    setParams(params);
  };

  const handelMorePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!movieSearch.trim()) return;

    async function getData() {
      try {
        setIsHidden("none");
        setIsLoading(true);

        const data = await getSearchMovies(movieSearch, page);
        if (page === 1) {
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
  }, [movieSearch, page]);

  return (
    <>
      <SearchForm onSearch={handleSearch} />

      <section className={css.container}>
        <MovieList movies={movies} />
        {movies.length !== 0 && (
          <LoadMoreBtn onClick={handelMorePage} isHidden={isHidden}>
            Load more
          </LoadMoreBtn>
        )}

        {isLoading && <Loader />}
        {isError && <NotFoundPage />}
      </section>
    </>
  );
}
