import { imageHalfUrl } from "../../config";

class MovieItem extends HTMLElement {
    set item(item) {
        this._item = item;
        this.render();
    }
    render() {
        this.innerHTML = `
            <div class="movie-card">
                <div class="img-top">
                    <img src="${imageHalfUrl + this._item.poster_path}">
                </div>
                <div class="movie-info">
                    <h3>${this._item.original_title}</h3>
                </div>        
            </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);
