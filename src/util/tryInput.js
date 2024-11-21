import OutputView from '../view/OutputView.js';

const tryInput = async (inputFn) => {
  try {
    const input = await inputFn();

    return input;
  } catch (error) {
    OutputView.printError(error.message);

    return tryInput(inputFn);
  }
};

export default tryInput;
