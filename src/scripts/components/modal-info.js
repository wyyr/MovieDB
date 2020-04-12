class ModalInfo extends HTMLElement {
    set item(item) {
        this._item = item;
        this.render();
    }
    render() {
        this.innerHTML = /* html */ `
            <div class="modal fade" id="modalInfo-${this._item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${this._item.original_title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $(`#modalInfo-${this._item.id}`).modal("show");
    }
}

customElements.define("modal-info", ModalInfo);
