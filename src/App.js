import InputView from './view/InputView.js';

import tryInput from './util/tryInput.js';
import validateAmount from './util/validator/amount.js';
class App {
  async run() {
    const amount = await tryInput(() => this.getAmount());
  }

  async getAmount() {
    const amount = await InputView.readAmount();

    validateAmount(amount);

    return amount;
  }
}

export default App;
