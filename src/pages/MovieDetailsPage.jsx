import { useParams } from "react-router-dom";
// import css from "./MovieCast.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  console.log(movieId);

  return <h1>{movieId}</h1>;
}
