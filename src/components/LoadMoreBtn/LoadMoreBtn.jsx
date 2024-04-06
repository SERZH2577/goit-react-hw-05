import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ children, onClick, isHidden }) {
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
