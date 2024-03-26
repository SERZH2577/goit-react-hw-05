import { useParams } from "react-router-dom";
// import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();

  return { movieId };
}
