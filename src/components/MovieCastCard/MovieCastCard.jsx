// import {} from "../../pages/NotFoundPage";
import css from "./MovieCastCard.module.css";

export default function MovieCastCard({
  dataActor: { profile_path, name, character },
}) {
  const urlImg = `https://image.tmdb.org/t/p/w500/${profile_path}`;

  return (
    <div>
      <img
        className={css.castImg}
        src={urlImg}
        alt={name}
        width="200"
        height="300"
      />
      <div className={css.castItemThumb}>
        <h3 className={css.castItemTitle}>{name}</h3>
        <p className={css.castItemCharacter}>
          <span className={css.castItemSpan}>Character</span>
          {character}
        </p>
        {/* <p>
          <span className={style.castItemSpan}>Biography</span>
          {biography}
        </p> */}
      </div>
    </div>
  );
}
