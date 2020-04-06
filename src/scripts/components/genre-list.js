import "./genre-item";

class GenreList extends HTMLElement {
    set genres(genres) {
        this._genres = genres;
        this.render();
    }
    render() {
        this.innerHTML = "";
        this._genres.forEach((item) => {
            const genreItemElement = document.createElement("genre-item");
            genreItemElement.genre = item;
            this.appendChild(genreItemElement);
        });
    }
}

customElements.define("genre-list", GenreList);
