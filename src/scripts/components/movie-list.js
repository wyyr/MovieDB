import "./movie-item";

class MovieList extends HTMLElement {
    set list(list) {
        this._list = list;
        this.render();
    }
    empty() {
        this.innerHTML = "";
    }
    render() {
        this.innerHTML = "";
        this._list.forEach((item) => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.item = item;
            this.appendChild(movieItemElement);
        });
    }
}

customElements.define("movie-list", MovieList);
