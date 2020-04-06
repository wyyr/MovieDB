import { apiUrl, apiKey } from "../../config";

class Movies {
    static list(page) {
        return fetch(`${apiUrl}/list/${page}?api_key=${apiKey}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            return Promise.resolve(data.items);
        })
        .catch(e => Promise.reject(new Error(e)));
    }
    static newest() {
        return fetch(`${apiUrl}/movie/76341?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch(e => Promise.reject(new Error(e)));
    }
    static genres() {
        return fetch(`${apiUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            return Promise.resolve(data.genres);
        })
        .catch(e => Promise.reject(new Error(e)));
    }
}

export default Movies;
