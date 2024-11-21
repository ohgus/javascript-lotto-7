import LottoMachine from './model/LottoMachine.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import tryInput from './util/tryInput.js';
import validateAmount from './util/validator/amount.js';
class App {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async run() {
    const amount = await tryInput(() => this.getAmount());
    const lottos = this.buyLottos(amount);

    OutputView.printLottos(lottos);
  }

  async getAmount() {
    const amount = await InputView.readAmount();

    validateAmount(amount);

    return amount;
  }

  buyLottos(amount) {
    this.#lottoMachine.generateLottos(amount);

    return this.#lottoMachine.getLottos();
  }
}

export default App;
