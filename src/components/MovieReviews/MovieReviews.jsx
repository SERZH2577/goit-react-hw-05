import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../apiService/movies";
import MovieReviewsCard from "../MovieReviewsCard/MovieReviewsCard";
import Loader from "../Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const dataReviews = async () => {
      try {
        setIsLoading(true);
        setReviews(null);

        const data = await getMovieReviews(movieId);
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        setReviews(null);
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    dataReviews();
  }, [movieId]);

  return (
    <section>
      {isLoading && <Loader />}
      {isError && <NotFoundPage />}

      {!isLoading && reviews !== null && reviews.length === 0 && (
        <p
          className={css.reviewNotFound}
        >{`We don't have any reviews for this movie`}</p>
      )}

      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li className={css.reviewItem} key={review.id}>
              <MovieReviewsCard dataReview={review} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
