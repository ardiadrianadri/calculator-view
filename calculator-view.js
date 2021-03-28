import {
  CalculatorView,
  CalculatorButton,
  CalculatorDisplay,
  CalculatorKeyBoard
} from './src/index.js';


window.customElements.define('calculator-display', CalculatorDisplay);
window.customElements.define('calculator-button', CalculatorButton);
window.customElements.define('calculator-keyboard', CalculatorKeyBoard);
window.customElements.define('calculator-view', CalculatorView);
