import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../../apiService/movies";
import Loader from "../Loader/Loader";
import MovieCastCard from "../MovieCastCard/MovieCastCard";
import NotFoundPage from "../../pages/NotFoundPage";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const dataMovieCast = async () => {
      try {
        setIsLoading(true);
        setActors(null);

        const dataActors = await getMovieCredits(movieId);
        console.log(dataActors.cast);
        setActors(dataActors.cast);
      } catch (error) {
        setActors(null);
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    dataMovieCast();
  }, [movieId]);

  return (
    <section className={css.castSection}>
      {isLoading && <Loader />}
      {isError && <NotFoundPage />}

      {actors && (
        <ul className={css.castList}>
          {actors.map((actor) => (
            <li className={css.castItem} key={actor.id}>
              <MovieCastCard dataActor={actor} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
