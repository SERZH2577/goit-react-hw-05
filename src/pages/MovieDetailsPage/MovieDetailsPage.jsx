import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../apiService/movies";
import { Suspense, useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";
import clsx from "clsx";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navItem, isActive && css.isActive);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

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
    <>
      <Link to={backLink.current}>
        <button className={css.btnBack}> Go Back</button>
      </Link>
      <section className={css.container}>
        {movie && (
          <div className={css.mainBlock}>
            <div className={css.detailsBlock}>
              <img
                className={css.movieImg}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "https://kartinki.pics/pics/uploads/posts/2022-08/1660722963_10-kartinkin-net-p-fon-dlya-prezentatsii-film-krasivo-10.jpg"
                }
                alt={movie.original_title}
                width="350"
                height="500"
              />

              <div className={css.descriptionBlock}>
                <div>
                  {" "}
                  <h2 className={css.movieTitle}>{movie.title}</h2>
                  <h3 className={css.descriptionTitle}>
                    Rating: {movie.vote_average.toFixed(1)}
                  </h3>
                  <h3 className={css.descriptionTitle}>Overview</h3>
                  <p className={`${css.movieDetailsText} ${css.forLaptop}`}>
                    {movie.overview}
                  </p>
                  <h3 className={css.descriptionTitle}>Genres</h3>
                  <ul className={css.genresList}>
                    {movie.genres.map((genre) => (
                      <li className={css.genresItem} key={genre.id}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={css.moreInfo}>
                  <nav className={css.moreInfoNav}>
                    <NavLink to={"cast"} className={makeLinkClass}>
                      Cast
                    </NavLink>
                    <NavLink to={"reviews"} className={makeLinkClass}>
                      Reviews
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>

            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        )}
      </section>
    </>
  );
}
