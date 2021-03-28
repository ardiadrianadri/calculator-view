import { html, css, LitElement } from 'lit-element';

export class CalculatorButton extends LitElement {
  static get styles() {
    return css`
      .calc-button {
        height: var(--button-mobile-height);
        width: var(--button-mobile-width);
        margin: var(--button-margin);
        border-radius: var(--general-border-radius);
        background-color: var(--button-background-color);
        font-size: var(--button-font-size);
        color: var(--button-font-color);
      }
      .calc-button:focus {
        outline: none;
        background-color: var(--button-press-background-color);
      }

      .calc-button.big {
        width: var(--button-clear-mobile-width);
      }

      .calc-button.medium {
        width: var(--button-0-mobile-width);
      }

      @media(min-width: 768px) {
        .calc-button {
          width: var(--button-desktop-width);
          height: var(--button-desktop-height);
        }

        .calc-button.big {
          width: var(--button-clear-desktop-width);
        }

        .calc-button.medium {
          width: var(--button-0-desktop-width);
        }
      }
    `
  }

  static get properties() {
    return {
      label: { type: String },
      type: { type: String },
      value: { type: String },
      size: { type: String },
      keys: { type: Array }
    }
  }

  __keyPress(event) {
    event.preventDefault();

    if (this.keys.includes(event.key)) {
      this.shadowRoot.querySelector('button').focus();
      this.__onClick();
    }
  }

  __keyUp(event) {
    event.preventDefault();
    if (event.key === 'Backspace') {
      this.shadowRoot.querySelector('button').focus();
      this.__onClick();
    }
  }

  constructor() {
    super();

    this.__keyPressBind = this.__keyPress.bind(this);
    this.__keyUpBind = this.__keyUp.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('keypress', this.__keyPressBind);
    if(this.keys.includes('Backspace')) {
      window.addEventListener('keyup', this.__keyUpBind);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('keypress', this.__keyPressBind);
    window.removeEventListener('keyup', this.__keyUpBind);
  }

  __onClick() {
    const clickedEvent = new CustomEvent('calc-button', {
      detail: { value: this.value, type: this.type },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(clickedEvent);
  }

  render() {
    return html`
    <button
      class="calc-button ${this.size}"
      @click=${this.__onClick}
    >${this.label}</button>
    `
  }
}