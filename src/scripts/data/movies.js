import { apiUrl, apiKey } from "../../config";

class Movie {
    static list(page) {
        return fetch(`${apiUrl}/list/${page}?api_key=${apiKey}&language=en-US`)
            .then((res) => res.json())
            .then((data) => {
                return Promise.resolve(data.items);
            })
            .catch((e) => Promise.reject(new Error(e)));
    }
    static detail(movieID) {
        return fetch(`${apiUrl}/movie/${movieID}?api_key=${apiKey}&language=en-US`)
            .then((res) => res.json())
            .then((data) => {
                return Promise.resolve(data);
            })
            .catch((e) => Promise.reject(new Error(e)));
    }
    static trendingToday() {
        return fetch(`${apiUrl}/trending/all/day?api_key=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                return Promise.resolve(data.results);
            })
            .catch((e) => Promise.reject(new Error(e)));
    }
    static search(keyword) {
        return fetch(`${apiUrl}/search/movie?api_key=${apiKey}&include_adult=false&query=${keyword}`)
            .then((res) => res.json())
            .then((data) => {
                return Promise.resolve(data.results);
            })
            .catch((e) => Promise.reject(new Error(e)));
    }
    // static genres(list) {
    //     return fetch(`${apiUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             return Promise.resolve(data.results);
    //         })
    //         .catch((e) => Promise.reject(new Error(e)));;
    // }
}

export default Movie;
