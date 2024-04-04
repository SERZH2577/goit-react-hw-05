import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchForm.module.css";

const notify = () => {
  toast.error("The search field cannot be empty!", { duration: 2000 });
};

export default function SearchForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    // console.log(Boolean(!value.trim()));

    if (!value.trim()) {
      notify();
      return;
    }

    onSubmit(value);

    setValue("");
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} onSubmit={handelSubmit}>
        <input
          value={value}
          className={css.input}
          type="text"
          autoFocus
          placeholder="Search movies..."
          onChange={handelChange}
        />
        <button type="submit" className={css.btn}>
          Find a movie
        </button>
      </form>
    </>
  );
}
