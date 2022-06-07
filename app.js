const stringLength = (inputText) => {
  if (inputText.length < 1 || inputText.length > 10) {
    throw 'Text length error.';
  }
  return inputText.length;
};

const reverseString = (inputText) => {
  inputText = inputText.split('').reverse().join('');
  return inputText;
};

module.exports = { stringLength, reverseString };
