class GenreItem extends HTMLElement {
    set genre(genre) {
        this._genre = genre;
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="item">
            <h2>${this._genre.name}</h2>
        </div>
        `;
    }
}

customElements.define("genre-item", GenreItem);
