import { html, css, LitElement } from 'lit-element';

export class CalculatorView extends LitElement {
  static get styles() {
    return css`
      .calculator {
        width: var(--calcultor-mobile-width);
        background-color: var(--color-background-calculator);
        margin-left: auto;
        margin-right: auto;
        padding: var(--calculator-margin);
        border-radius: var(--general-border-radius);
      }

      @media(min-width: 768px) {
        .calculator {
          width: var(--calculator-desktop-width);
        }
      }
    `;
  }

  static get properties() {
    return {
      buttons: { type: Array },
      displayValue: { attribute: false }
    };
  }

  constructor() {
    super();

    this.displayValue = '';
    this.buttons = [];
  }

  __onButtonPressed(event) {
    const { value, type } = event.detail;
    let calculationEvent = null;
    switch(type) {
      case 'number':
        this.displayValue += value
        break;
      case 'operation':
        calculationEvent = new CustomEvent('calc-event', {
          detail: { number: this.displayValue, operation: value },
          bubbles: true,
          composed: true
        });

        this.dispatchEvent(calculationEvent);
        this.displayValue = '';
        break;
      default:
        this.displayValue = '';
    }
  }

  render() {
    return html`
      <div class="calculator">
        <calculator-display
          .content=${this.displayValue}
        ></calculator-display>
        <calculator-keyboard
          .buttons=${this.buttons}
          @calc-button=${this.__onButtonPressed}
        ></calculator-keyboard>
      </div>
    `;
  }
}
