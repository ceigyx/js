class ToggleButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <style>
            section {
                border: 2px orange solid;
                width: auto;
                margin: 10px;
                text-align: center;
                padding: auto;
                background-color: lightblue;
            }
        </style>
        <button>Show</button>
        <section hidden="true">
            <slot name="text"></slot>
        </section>

    `;
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', this._toggle.bind(this));
  }

  _toggle() {
    const section = this.shadowRoot.querySelector('section');
    const button = this.shadowRoot.querySelector('button');
    if (section.hidden) {
        button.textContent = 'Hide';
    } else {
        button.textContent = 'Show';
    }
    section.hidden = !section.hidden;
  }
}

customElements.define('uc-toggle-button', ToggleButton);
