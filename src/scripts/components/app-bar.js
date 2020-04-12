import { appName } from '../../config';

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
            <nav class="navbar">
                <div class="container">
                    <div class="brand">
                        <a href="index.html" class="logo">${appName}</a>
                    </div>
                    <div class="right-menu">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="?type=trending">Trending</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);
