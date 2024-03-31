import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ children, onClick, isHidden }) {
  // console.log(display);
  return (
    <button
      type="submit"
      className={css.btn}
      onClick={onClick}
      style={{ display: isHidden }}
    >
      {children}
    </button>
  );
}
