const api_KEY = "api_key=15e383204c1b8a09dbfaaa4c01ed7e17";
const base_URL = "https://api.themoviedb.org/3";
const api_URL = `${base_URL}/discover/movie?sort_by=popularity.desc&${api_KEY}`;
const img_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = `${base_URL}/search/movie?${api_KEY}`;

function getMovies(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      displayMovies(data.results);
      console.log(data);
    });
}