import {
  CalculatorView,
  CalculatorButton,
  CalculatorDisplay,
  CalculatorKeyBoard,
  CalculatorLogic,
  TestLogic
} from './src/index.js';


window.customElements.define('calculator-display', CalculatorDisplay);
window.customElements.define('calculator-button', CalculatorButton);
window.customElements.define('calculator-keyboard', CalculatorKeyBoard);
window.customElements.define('calculator-view', CalculatorView);
window.customElements.define('calculator-logic', CalculatorLogic);
window.customElements.define('test-logic', TestLogic);
