import axios from "axios";

// const API_KEY = "11aa654a2acdb20fe9d1d9415b709ac1-mXIeBGJQlQS2J2m8NPoAUcJM";
axios.defaults.baseURL = "https://api.themoviedb.org/";
axios.defaults.params = {
  per_page: 20,
};

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWFhNjU0YTJhY2RiMjBmZTlkMWQ5NDE1YjcwOWFjMSIsInN1YiI6IjY1ZThlN2U4YzUwYWQyMDE3Y2E4OGNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gAcAN4HvXYObSHXe-bqyVHnjgU2LAoy_d7SLGU0MTUs",
  },
};

export async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `3/trending/movie/day?language=en-US`,
      options
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSearchMovies(query, page) {
  try {
    const response = await axios.get(
      `3/search/movie?include_adult=false&language=en-US&query=${query}&page=${page}`,
      options
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await axios.get(`3/movie/${id}?language=en-US`, options);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCredits(id) {
  try {
    const response = await axios.get(
      `3/movie/${id}/credits?language=en-US`,
      options
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `3/movie/${id}/reviews?language=en-US`,
      options
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
