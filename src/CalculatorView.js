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
      calculatorDisplay: { type: String },
      displayValue: { attribute: false }
    };
  }

  __handleTouchStart(event) {
    const firstTouch = event.touches[0];
    this.xDown = firstTouch.clientX;
  }

  __handleTouchMove(event) {
    if (this.xDown) {
      const xUp = event.touches[0].clientX;

      if (this.xDown > xUp) {
        this.displayValue = '';
      }
    }
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

  constructor() {
    super();

    this.xDown = null;
    this.displayValue = '';
    this.buttons = [];
    this.__handleTouchStartBind = this.__handleTouchStart.bind(this);
    this.__handleTouchMoveBind = this.__handleTouchMove.bind(this);
  }

  set calculatorDisplay(value) {
    this.displayValue = value;
  }

  firstUpdated() {
    this.shadowRoot.querySelector('calculator-display').addEventListener('touchstart', this.__handleTouchStartBind);
    this.shadowRoot.querySelector('calculator-display').addEventListener('touchmove', this.__handleTouchMoveBind);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('calculator-display').removeEventListener('touchstart', this.__handleTouchStartBind);
    this.shadowRoot.querySelector('calculator-display').removeEventListener('touchmove', this.__handleTouchMoveBind);
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
