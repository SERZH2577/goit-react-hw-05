import { useParams } from "react-router-dom";
// import css from "./MovieCast.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  console.log(movieId);

  return <h1>{movieId}</h1>;
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
