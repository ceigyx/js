/* 
Practice movie list app - Ceigyx
*/

//get elements
//modals
const addMovieModal = document.getElementById("add-modal");
const deleteModal = document.getElementById("delete-modal");
//buttons
const addMovieCancel = addMovieModal.querySelector(".btn--passive");
const addMovieSuccess = addMovieCancel.nextElementSibling;
const addMovieBtn = document.querySelector("header button");

//inputs
const inputs = addMovieModal.getElementsByTagName("input");

//other
const listRoot = document.getElementById("movie-list");
const backdrop = document.getElementById("backdrop");
const entryTextSelection = document.getElementById("entry-text");

//local data
const movies = [];

//render
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSelection.style.display = "block";
  } else {
    entryTextSelection.style.display = "none";
  }
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieSelection.bind(this, id));
  listRoot.appendChild(newMovieElement);
};

//handlers
const toggleMovieModal = () => {
  toggleBackdrop();
  addMovieModal.classList.toggle("visible");
};

const cancelAddMovie = () => {
  toggleMovieModal();
  clearMovieInput();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const backdropClick = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovie = () => {
  const titleValue = inputs[0].value;
  const imageUrlValue = inputs[1].value;
  const ratingValue = inputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue === "" ||
    ratingValue === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 - 5).");
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  clearMovieInput();
  updateUI();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
  toggleMovieModal();
};

const clearMovieInput = () => {
  for (const input of inputs) {
    input.value = "";
  }
};

const deleteMovieSelection = () => {
    deleteModal.classList.toggle("visible");
    toggleBackdrop();
    deleteMovie();
}

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    listRoot.removeChild(listRoot.children[movieIndex]);
};

//event listners
addMovieBtn.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClick);
addMovieCancel.addEventListener("click", cancelAddMovie);
addMovieSuccess.addEventListener("click", addMovie);
