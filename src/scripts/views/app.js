import { appName } from "../../config";
import Movie from "../data/movies";
import "../components/app-bar";
import "../components/banner-content";
import "../components/movie-list";
import "../components/do-paginate";
import "../components/footer-bar";
import "../components/modal-info";

const app = () => {
    const movieListElement = document.querySelector("movie-list");
    const mainContainer = document.querySelector("main > .movie-container");
    const doPaginateElement = document.querySelector("do-paginate");
    const modalInfoElement = document.querySelector("modal-info");

    document.querySelector(".title").innerText = `Welcome to ${appName}`;

    const buffer = (results) => {
        movieListElement.empty();

        const buffer = document.createElement("div"),
            img = document.createElement("img");

        buffer.classList.add("buffer");
        img.src = "src/images/load.gif";

        buffer.appendChild(img);
        mainContainer.prepend(buffer);

        setTimeout(() => {
            buffer.remove();
            showMovieList(results);
        }, 1000);
    };

    const movieList = async (page = 1) => {
        try {
            const results = await Movie.list(page);
            buffer(results);
        } catch (error) {
            console.log(new Error(error));
            showErrorMessage(error);
        }
    };

    const searchMovies = async (keyword) => {
        try {
            const results = await Movie.search(keyword);
            buffer(results);
        } catch (e) {
            console.log(new Error(e));
            showErrorMessage(e);
        }
    };

    const trendingListToday = async () => {
        try {
            const results = await Movie.trendingToday();
            buffer(results);
        } catch (e) {
            showErrorMessage(e);
        }
    };

    const movieDetail = async (movieID) => {
        try {
            const result = await Movie.detail(movieID);
            modalInfoElement.item = result;
        } catch (e) {
            showErrorMessage(e);
        }
    };


    const showMovieList = (results) => {
        movieListElement.list = results;
    };

    const showErrorMessage = (msg = "Check your internet connection!") => {
        const info = document.createElement("div");
        const infoTitle = document.createElement("h1");

        info.classList.add("alert");
        infoTitle.innerText = "Oops, Something went wrong!";
        info.appendChild(infoTitle);
        mainContainer.prepend(info);

        setTimeout(() => {
            alert(msg);
        }, 300);
    };

    const inputSearch = document.querySelector("#inputSearch");
    inputSearch.addEventListener("keypress", function (e) {
        if (e.keyCode == 13 || e.keyCode == "sent!") {
            const value = this.value;
            if (value != "" && value != undefined) {
                searchMovies(value);
                doPaginateElement.display = "none";
            }
        }
    });

    const params = document.location.search.split("=")[1];

    if (params == "trending") {
        doPaginateElement.display = "none";

        trendingListToday();
    } else {
        const previous = document.querySelector(".page-item > .previous");
        const next = document.querySelector(".page-item > .next");

        function doPaginate(e) {
            const className = this.className;
            let page = parseInt(this.dataset.page);
            if (!isNaN(page) && page != 0) {
                movieList(page);
                if (className == "next") {
                    let nextChange = (next.dataset.page = ++page);
                    previous.dataset.page = nextChange - 2;
                } else {
                    let prevChange = (previous.dataset.page = --page);
                    next.dataset.page = prevChange + 2;
                }
            }
        }

        previous.addEventListener("click", doPaginate);
        next.addEventListener("click", doPaginate);

        movieList(1);
    }

    // const clickCard = async () => {
    $(".movie-container").on("click", ".movie-card", function () {
        const movieID = $(this).data("movieid");
        movieDetail(movieID);
    });
    // }
};

export default app;
