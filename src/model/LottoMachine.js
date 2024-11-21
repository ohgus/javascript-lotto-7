import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  generateLottos(amount) {
    let lottoCount = amount / 1000;

    while (lottoCount > 0) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b,
      );

      this.#lottos.push(lotto);
      lottoCount -= 1;
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoMachine;
