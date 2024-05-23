const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="./css.css">
<div class="weather-card">
<div class="weather-side">
  
</div>
<div class="info-side">

</div>
</div>
`;

class SellButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this.shadowRoot.querySelector('#text').textContent = newValue;
        }
    }

    connectedCallback() {
        const textAttribute = this.getAttribute('text');
        if (textAttribute) {
            this.shadowRoot.querySelector('#text').textContent = textAttribute;
        }
    }


}
customElements.define('sell-button', SellButton);