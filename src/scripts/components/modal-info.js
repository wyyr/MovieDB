import { imageHalfUrl } from "../../config";

class ModalInfo extends HTMLElement {
    set item(item) {
        this._item = item;
        this._item.genres = this._item.genres.map(e => e.name).join(', ');
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
                            <div class="row">
                                <div class="col-lg-5">
                                    <img src="${imageHalfUrl + this._item.poster_path}" width="100%">
                                </div>
                                <div class="col-lg-7 movie-info">
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <tr>
                                                <th>Title</th>
                                                <td>${this._item.original_title}</td>
                                            </tr>
                                            <tr>
                                                <th>Release Date</th>
                                                <td>${this._item.release_date}</td>
                                            </tr>
                                            <tr>
                                                <th>Genres</th>
                                                <td>${this._item.genres}</td>
                                            </tr>
                                            <tr>
                                                <th>Popularity</th>
                                                <td>${this._item.popularity}</td>
                                            </tr>
                                            <tr>
                                                <th>Overview</th>
                                                <td>${this._item.overview}</td>
                                            </tr>
                                            <tr>
                                                <th>Homepage</th>
                                                <td>
                                                    <a href="${this._item.homepage}" target="_blank">Go to homepage</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $(`#modalInfo-${this._item.id}`).modal("show");
    }
}

customElements.define("modal-info", ModalInfo);
