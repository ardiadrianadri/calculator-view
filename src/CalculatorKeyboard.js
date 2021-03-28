import { html, css, LitElement } from 'lit-element';

export class CalculatorKeyBoard extends LitElement {
  static get styles() {
    return css`
      .keyboard {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      buttons: { type: Array }
    }
  }

  render() {
    return html`
      <div class="keyboard">
        ${this.buttons.map((button) => html`
            <calculator-button
              .label=${button.label}
              .type=${button.type}
              .value=${button.value}
              .size=${button.size}
              .keys=${button.keys}
            ></calculator-button>
          `)}
      </div>
    `;
  }
}