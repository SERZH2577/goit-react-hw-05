import { useState, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import NotFound from "../../pages/NotFound";
import css from "./App.module.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav>
          <Link to="/"></Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

// ===========================================================================

// У застосунку обов'язково повинні бути наступні маршрути.

// '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
// '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
// /movies/:movieId/reviews – компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
// Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.
