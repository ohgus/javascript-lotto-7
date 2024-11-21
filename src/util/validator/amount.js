import ERROR_MESSAGE from '../../constant/error.js';

const validateAmount = (amount) => {
  if (amount === '') {
    throw new Error(ERROR_MESSAGE.empty);
  }

  if (Number.isNaN(amount)) {
    throw new Error(ERROR_MESSAGE.not_number);
  }

  if (amount < 1000) {
    throw new Error(ERROR_MESSAGE.less_than_minimum);
  }

  if (amount % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.wrong_unit);
  }
};

export default validateAmount;
