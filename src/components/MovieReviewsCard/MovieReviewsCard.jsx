import css from "./MovieReviewsCard.module.css";

export default function MovieReviewsCard({
  dataReview: {
    author,
    author_details: { username },
    content,
    created_at,
  },
}) {
  return (
    <>
      <h2 className={css.reviewItemTitle}>{author}</h2>
      <p className={css.reviewItemUserName}>
        <span className={css.reviewItemSpan}>Username</span>
        {username}
      </p>

      <p className={css.reviewItemContent}>{content}</p>
    </>
  );
}
