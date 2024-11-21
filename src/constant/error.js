const prefix = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  not_number: `${prefix} 숫자만 입력해야 합니다.`,
  less_than_minimum: `${prefix} 구입금액은 최소 1000원 이상이어야 합니다.`,
  wrong_unit: `${prefix} 구입금액은 1000원 단위로 입력해야 합니다.`,
  empty: `${prefix} 값이 비어있습니다.`,
});

export default ERROR_MESSAGE;
