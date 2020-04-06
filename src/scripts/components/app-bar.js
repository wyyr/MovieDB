import { appName } from '../../config';

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <div class="brand">
                        <a href="index.html" class="logo">${appName}</a>
                    </div>
                    <div class="right-menu">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="">Trending</a></li>
                            <li class="nav-item"><a href="genres.html">Genres</a></li>
                        </ul>
                        <div class="search-box">
                            <input type="search" id="inputSearch">
                            <button type="submit" id="btnSearch">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);
