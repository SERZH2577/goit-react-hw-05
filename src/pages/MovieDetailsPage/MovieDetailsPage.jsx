import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../apiService/movies";
import { Suspense, useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [movieId]);

  return (
    <section className={css.movieDetails}>
      <Link to={backLink}>
        <button className={css.btnLink}>
          {/* <GoArrowLeft size="20" /> */}
          Go Back
        </button>
      </Link>
      {/* {loading && <Loader />} */}

      {movie && (
        <div className={css.movieDetailsSection}>
          <div className={css.movieDetailsThumb}>
            <img
              className={css.movieDetailsImg}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : fallbackImage.image
              }
              alt={movie.original_title}
              width="350"
              height="500"
            />
            <div>
              <h2 className={css.movieDetailsTitle}>{movie.original_title}</h2>
              <p className={css.movieDetailsTagline}>{movie.tagline}</p>
              {/* <p className={css.movieDetailsText}>
                <span className={css.spanAccent}>Release date:</span>{" "}
                {formatDate(movie.release_date)}
              </p> */}
              {/* {userScore !== "0" && userScore !== null && (
                <div className={css.movieDetailsScore}>
                  <p className={css.movieDetailsText}>
                    <span className={css.spanAccent}>User Score:</span>{" "}
                    {userScore}&#37;
                  </p>{" "}
                  <span
                    className={
                      userScore < 60 ? css.iconSpilled : css.iconUpright
                    }
                  ></span>
                </div>
              )} */}
              <h3 className={css.movieDetailsTitleFilm}>Overview</h3>
              <p className={`${css.movieDetailsText} ${css.forLaptop}`}>
                {movie.overview}
              </p>
              <h3 className={css.movieDetailsTitleFilm}>Genres</h3>
              <ul className={css.movieDetailsGenresList}>
                {movie.genres.map((genre) => (
                  <li className={css.movieDetailsText} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <nav className={css.moreInfo}>
            <NavLink
              // className={buildLinkClass(`/movies/${id}/cast`)}
              to={"cast"}
              state={location.state}
            >
              Cast
            </NavLink>
            <NavLink
              // className={buildLinkClass(`/movies/${id}/reviews`)}
              to={"reviews"}
              element={location.state}
            >
              Reviews
            </NavLink>
          </nav>

          <Outlet />
          {/* <Suspense></Suspense> */}
        </div>
      )}
    </section>
  );
}
