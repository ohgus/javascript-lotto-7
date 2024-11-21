import { Console } from '@woowacourse/mission-utils';

import INPUT_MESSAGE from '../constant/input.js';

const InputView = {
  async readAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.amount);

    return input;
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);

    return input.split(',').map((number) => Number(number));
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);

    return Number(input);
  },
};

export default InputView;
