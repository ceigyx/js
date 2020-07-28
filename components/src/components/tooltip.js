export class Tooltip extends HTMLElement {
    constructor() {
        super();
        document.createElement('span');
        
        this.appendChild();
    }
}

customElements.define('uc-tooltip', Tooltip);