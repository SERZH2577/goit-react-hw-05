import css from "./MovieReviewsCard.module.css";

export default function MovieReviewsCard({
  dataReview: {
    author,
    author_details: { username },
    content,
    created_at,
  },
}) {
  // const formatDate = (date) => {
  //   return format(new Date(date), "MMMM dd yyyy HH:mm:ss");
  // };

  return (
    <>
      <h2 className={css.reviewItemTitle}>{author}</h2>
      <p className={css.reviewItemUserName}>
        <span className={css.reviewItemSpan}>Username</span>
        {username}
      </p>
      {/* <p className={css.reviewItemDate}>{formatDate(created_at)}</p> */}
      <p className={css.reviewItemContent}>{content}</p>
    </>
  );
}
