import { useState, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import NotFound from '../../pages/NotFound';
import css from './App.module.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

// API Key
// 11aa654a2acdb20fe9d1d9415b709ac1

// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWFhNjU0YTJhY2RiMjBmZTlkMWQ5NDE1YjcwOWFjMSIsInN1YiI6IjY1ZThlN2U4YzUwYWQyMDE3Y2E4OGNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gAcAN4HvXYObSHXe-bqyVHnjgU2LAoy_d7SLGU0MTUs

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

// ===========================================================================

// У застосунку обов'язково повинні бути наступні маршрути.

// '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
// '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
// /movies/:movieId/reviews – компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
// Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.
