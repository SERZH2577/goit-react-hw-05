import axios from "axios";

const API_KEY = "11aa654a2acdb20fe9d1d9415b709ac1-mXIeBGJQlQS2J2m8NPoAUcJM";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = {
  client_id: API_KEY,
  // orientation: 'landscape',
  per_page: 20,
};

export default async function getMovies(query, page) {
  const { data } = await axios.get(`photos/?query=${query}&page=${page}`);

  return data;
}

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWFhNjU0YTJhY2RiMjBmZTlkMWQ5NDE1YjcwOWFjMSIsInN1YiI6IjY1ZThlN2U4YzUwYWQyMDE3Y2E4OGNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gAcAN4HvXYObSHXe-bqyVHnjgU2LAoy_d7SLGU0MTUs",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// API Key
// 11aa654a2acdb20fe9d1d9415b709ac1

// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWFhNjU0YTJhY2RiMjBmZTlkMWQ5NDE1YjcwOWFjMSIsInN1YiI6IjY1ZThlN2U4YzUwYWQyMDE3Y2E4OGNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gAcAN4HvXYObSHXe-bqyVHnjgU2LAoy_d7SLGU0MTUs

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
