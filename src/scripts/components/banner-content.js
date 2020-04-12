import "@fortawesome/fontawesome-free/js/all"

class BannerContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = /* html */`
        <style>
            .icon-search {
                position: absolute;
                top: 15px;
                left: 15px;
                color: #000;
            }
        </style>
        <div class="banner">
            <div class="container">
                <div class="banner-content">
                    <h1 class="title"></h1>
                    <div class="search-box">
                        <i class="fas fa-search icon-search"></i>
                        <input type="search" id="inputSearch" placeholder="Find your movie">
                        <!-- <button type="submit" id="btnSearch">Search</button> -->
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("banner-content", BannerContent);