import css from "./MovieCastCard.module.css";

export default function MovieCastCard({
  dataActor: { profile_path, name, character },
}) {
  return (
    <div>
      <img
        className={css.castImg}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : "https://kartinki.pics/pics/uploads/posts/2022-08/1660722963_10-kartinkin-net-p-fon-dlya-prezentatsii-film-krasivo-10.jpg"
        }
        alt={name}
        width="200"
        height="300"
      />
      <div>
        <h3 className={css.castName}>{name}</h3>
        <p className={css.castText}>
          <span className={css.castTextSpan}>Character</span>
          {character}
        </p>
      </div>
    </div>
  );
}
