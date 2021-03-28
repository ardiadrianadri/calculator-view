import { html, LitElement } from 'lit-element';

export class TestLogic extends LitElement {
  static get properties() {
    return {
      testData: { attribute: false }
    }
  }
  
  __onAdd2() {
    this.testData = {
      number: '2',
      operation: 'add'
    };
  }

  __onAdd12() {
    this.testData = {
      number: '12',
      operation: 'add'
    };
  }

  __onResult() {
    this.testData = {
      number: '2',
      operation: 'calculate'
    };
  }

  // eslint-disable-next-line class-methods-use-this
  __getResult(event) {
    console.log(event);
  }

  render() {
    return html`
      <button @click=${this.__onAdd2}>ADD 2</button>
      <button @click=${this.__onAdd12}>ADD 12</button>
      <button @click=${this.__onResult}>RESULT</button>
      <calculator-logic
        .calculation=${this.testData}
        @result=${this.__getResult}
      ></calculator-logic>
    `
  }
}