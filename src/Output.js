import { Console } from '@woowacourse/mission-utils';

import LOTTO_RULE from './constant/lotto.js';
import OUTPUT_MESSAGES from './constant/output.js';

class Output {
  static #getProfitRateMessage(profitRate) {
    return `${OUTPUT_MESSAGES.PROFIT_RATE.HEAD}${profitRate.toFixed(1)}${
      OUTPUT_MESSAGES.PROFIT_RATE.TAIL
    }`;
  }

  static #printProfitRate(profitRate) {
    const profitRateMessage = this.#getProfitRateMessage(profitRate);
    Console.print(profitRateMessage);
  }

  static printLottos(lottos) {
    Console.print(`\n${lottos.length}${OUTPUT_MESSAGES.QUANTITY}`);
    const lottoStrings = lottos
      .map((lotto) => `[${lotto.join(', ')}]`)
      .join('\n');
    Console.print(lottoStrings);
  }

  static printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  static printWinningResult(rankCounts, profitRate) {
    Console.print(OUTPUT_MESSAGES.WINNING_STATS.HEAD_MESSAGE);
    this.#printRankStats(rankCounts);
    this.#printProfitRate(profitRate);
  }

  static #printRankStats(rankCounts) {
    OUTPUT_MESSAGES.PRINT_ORDER.forEach((rankKey) => {
      const rank = LOTTO_RULE.RANK[rankKey];
      const count = rankCounts[rank];
      Console.print(
        `${OUTPUT_MESSAGES.WINNING_STATS[rankKey]}${count}${OUTPUT_MESSAGES.WINNING_STATS.COUNT}`,
      );
    });
  }
}

export default Output;
