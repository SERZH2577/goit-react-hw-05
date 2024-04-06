import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchForm.module.css";

const notify = () => {
  toast.error("The search field cannot be empty!", { duration: 2000 });
};

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      notify();
      return;
    }

    onSearch(query);

    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className={css.container}>
        <Toaster position="top-right" reverseOrder={false} />

        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoFocus
            placeholder="Search movies..."
            name="query"
            value={query}
            onChange={handleChange}
          />
          <button type="submit" className={css.btn}>
            <IoSearch className={css.icon} />
          </button>
        </form>
      </div>
    </>
  );
}
