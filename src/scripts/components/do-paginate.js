class DoPaginate extends HTMLElement {
    set display(val) {
        this.style.display = val;
    }
    connectedCallback() {
        this.innerHTML = /* html */ `
            <div class="container">
                <ul class="pagination">
                    <li class="page-item"><span data-page="" class="previous">&lt;</span></li>
                    <li class="page-item"><span data-page="2" class="next">&gt;</span></li>
                </ul>
            </div>
        `;
    }
}

customElements.define("do-paginate", DoPaginate);
