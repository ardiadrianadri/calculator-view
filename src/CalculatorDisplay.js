import { html, css, LitElement } from 'lit-element';

export class CalculatorDisplay extends LitElement {
  static get styles() {
    return css`
        .display {
            display: flex;
            justify-content: start;
            align-items: center;
            margin-bottom: var(--general-border-radius);
            padding-left: var(--calculator-margin);
            overflow: hidden;
            height: var(--display-mobile-height);
            background-color: var(--diplay-background-color);
            text-align: start;
            font-size: var(--display-mobile-font-size);
            color: var(--display-font-color);
            border-radius: var(---general-border-radius);
        }

        @media(min-width: 768px) {
          .display {
            height: var(--display-desktop-height);
          }
        }
    `;
  }

  static get properties() {
    return {
      content: { type: String }
    }
  }


  constructor() {
    super();
    this.content = '';
  }

  render() {
    return html`
      <div class="display">${this.content}</div>
    `;
  }
}