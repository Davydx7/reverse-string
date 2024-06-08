// stringReverser.js
type TReverseString = (inputString: string) => string;
const reverseString: TReverseString = (inputString) => {
  if (typeof inputString !== 'string') {
    throw new Error('Invalid input. Function reverseString expects a string. but got ' + typeof inputString + ' instead.');
  }

  return inputString.split('').reverse().join('');
}

export default reverseString;
