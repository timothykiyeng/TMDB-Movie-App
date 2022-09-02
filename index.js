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

function displayMovies(data) {
  main.innerHTML = "";
  data.map((movie) => {
    const { title, poster_path, vote_average , overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    
    <img class="card-image" src="${img_URL + poster_path}" alt="${title}">
    
      <div class="header"></div>
      <div class="card-body"></div>
      <div class="movie_desc">
        <h3>${title}</h3>
        </div>
        <div justify-content-between>
            <span id="rate-count" class="ratings">${vote_average}</span>
            <br>
            <div><button type="button" id="ratings-button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#Review">Review</button></div>
            <br>
          </div>
        <div id="overview">
          <h3>Overview</h3> 
          ${overview}
        </div> 
        `   
        document.querySelector("#main").appendChild(movieEl);  
    
  });
}


// function addReviews( e ) {
//   e.preventDefault();
// }

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(`${searchURL}&query=${searchTerm}`);
  } else {
    getMovies(api_URL);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log('Content Loaded') 
   getMovies(api_URL);
  }

  
  );