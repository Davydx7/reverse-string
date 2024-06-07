// stringReverser.js

const reverseString = (inputString) => {
  if (typeof inputString !== 'string') {
    throw new Error('Invalid input. Function reverseString expects a string.');
  }

  return inputString.split('').reverse().join('');
}

export default reverseString;
