import { useState } from "react";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    // if (value === "") {
    //   // notify();
    //   return;
    // }

    onSubmit(value);

    setValue("");
  };

  return (
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
  );
}
