import { html, LitElement } from 'lit-element';

export class CalculatorLogic extends LitElement {

  static get properties() {
    return {
      calculation: { type: Object }
    };
  }

  constructor() {
    super();
    this.store = null;
    this.operations = {
      divide: (op1, op2) => op1/op2,
      multiply: (op1, op2) => op1 * op2,
      subtract: (op1, op2) => op1 - op2,
      add: (op1, op2) => op1 + op2,
    }
  }

  updated(changedProperties) {
    const op1 = (this.store) ? parseFloat(this.store) : 0;
    const op2 = (this.calculation) ? parseFloat(this.calculation.number) : null;
    const operation = (changedProperties.get('calculation')) ? changedProperties.get('calculation').operation : null;

    if (this.store === null && (op2 !== null)) {
      this.store = `${op2}`
    } else if ( this.calculation && this.calculation.operation === 'calculate') {
      const resultEvent = new CustomEvent('result', {
        detail: { result: (operation === 'calculate') ? op2 : this.operations[operation](op1, op2)},
        bubbles: true,
        composed: true
      });

      this.store = null;
      this.dispatchEvent(resultEvent);
    } else if (operation) {
      this.store = `${this.operations[operation](op1, op2)}`
    }
  }

  render() {
    return html``;
  }
}
