import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navItem, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <section className={css.navigation}>
      <nav className={css.nav}>
        <NavLink to="/" className={makeLinkClass}>
          <p>Home</p>
        </NavLink>
        <NavLink to="/movies" className={makeLinkClass}>
          <p>Movies</p>
        </NavLink>
      </nav>
    </section>
  );
}
