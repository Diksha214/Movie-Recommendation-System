const API_KEY = "YOUR_TMDB_API_KEY";

function searchMovie() {
  const query = document.getElementById("movieInput").value;
  if (!query) return;

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const movieId = data.results[0].id;
        localStorage.setItem('selectedMovieId', movieId);
        window.location.href = "recommendations.html";
      } else {
        alert("Movie not found. Try another title.");
      }
    });
}

function fetchRecommendations(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("recommendations");
      container.innerHTML = '';

      if (data.results.length === 0) {
        container.innerHTML = "<p>No recommendations found.</p>";
        return;
      }

      data.results.slice(0, 5).forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie-card";
        div.innerHTML = `<h3>${movie.title}</h3><p>${movie.overview}</p>`;
        container.appendChild(div);
      });
    });
}
