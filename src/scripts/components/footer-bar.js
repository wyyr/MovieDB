import { appName } from '../../config';

class FooterBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */`
            <div class="copyright">
                <span>&copy; 2020 ${appName}. All Rights Reserved.</span>
            </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);
