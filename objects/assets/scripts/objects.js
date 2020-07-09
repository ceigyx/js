window.onload = function () {
  const addMovieBtn = document.getElementById("add-movie-btn");
  const searchBtn = document.getElementById("search-btn");

  const movies = [];

  //user input

  //renderers / view

  const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");

    if (movies.length === 0) {
      movieList.classList.remove("visible");
    } else {
      movieList.classList.add("visible");
    }

    movieList.innerHTML = "";

    const filteredMovies = !filter
      ? movies
      : movies.filter((movie) => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
      const movieElement = document.createElement("li");
      const { info, ...otherProps } = movie;
      let { getFormattedTitle } = movie;
      getFormattedTitle = getFormattedTitle.bind(movie);

      let text = getFormattedTitle() + " - ";

      for (const key in info) {
        if (key !== "_title" && key !== "title") {
          text = text + `${key}: ${info[key]}`;
        }
      }

      movieElement.textContent = text;
      movieList.append(movieElement);
    });
  };

  //handlers / controllers

  const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (
      extraName.trim() === "" ||
      extraValue.trim() === ""
    ) {
      return;
    }

    const newMovie = {
      info: {
        set title(val) {
          if (val.trim() === "") {
            this._title = "DEFAULT";
            return;
          }
          this._title = val;
          return;
        },
        get title() {
          return this._title;
        },
        [extraName]: extraValue,
      },
      id: Math.random(),
      getFormattedTitle() {
        return this.info.title.toUpperCase();
      },
    };
    newMovie.info.title = title;
    console.log(newMovie)
    
    movies.push(newMovie);
    renderMovies();
  };

  const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
  };

  addMovieBtn.addEventListener("click", addMovieHandler);
  searchBtn.addEventListener("click", searchMovieHandler);
};
