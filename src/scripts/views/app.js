import "../components/app-bar";
import "../components/movie-list";
import "../components/genre-list";
import Movies from "../data/movies";
import "../components/footer-bar";

const app = () => {
    const movieListElement = document.querySelector("movie-list"),
        genreListElement = document.querySelector("genre-list");

    const newest = async () => {
        try {
            const newest = await Movies.newest();
        } catch (error) {
            console.log(new Error(error));
            showErrorMessage();
        }
    };

    const genres = async () => {
        try {
            const genres = await Movies.genres();
            showGenreList(genres);
        } catch (error) {
            console.log(new Error(error));
            showErrorMessage();
        }
    };

    const movieList = async () => {
        try {
            const list = await Movies.list(1);
            showMovieList(list);
        } catch (error) {
            console.log(new Error(error));
            showErrorMessage();
        }
    };

    const showMovieList = (results) => {
        movieListElement.list = results;
    };

    const showGenreList = (results) => {
        genreListElement.genres = results;
    };

    const showErrorMessage = (msg = "Check your internet connection!") => {
        const oopsInfo = document.querySelector("main .container");
        const info = document.createElement("div");
        const infoTitle = document.createElement("h1");

        info.classList.add("alert");
        infoTitle.innerText = "Oops, Something went wrong!";
        info.appendChild(infoTitle);
        oopsInfo.prepend(info);

        setTimeout(() => {
            alert(msg);
        }, 300);
    };

    const url = document.URL.split("/");
    const last = url.length - 1;

    if (url[last] != "genres.html") {
        movieList();
    } else {
        genres();
    }
};

export default app;
