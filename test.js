import reverseString from './index.js';

// Test cases
try {
  // Valid input cases
  console.assert(reverseString('hello') === 'olleh', 'Test Case 1 Failed');
  console.assert(reverseString('world') === 'dlrow', 'Test Case 2 Failed');
  console.assert(reverseString('') === '', 'Test Case 3 Failed');
  console.assert(reverseString('a') === 'a', 'Test Case 4 Failed');
  console.assert(reverseString('ab') === 'ba', 'Test Case 5 Failed');
  console.assert(reverseString('racecar') === 'racecar', 'Test Case 6 Failed');

  // Invalid input cases
  try {
    reverseString(123);
    console.assert(false, 'Test Case 7 Failed: Expected error for non-string input');
  } catch (e) {
    console.assert(e.message === 'Invalid input. Function reverseString expects a string.', 'Test Case 7 Failed');
  }

  try {
    reverseString({});
    console.assert(false, 'Test Case 8 Failed: Expected error for non-string input');
  } catch (e) {
    console.assert(e.message === 'Invalid input. Function reverseString expects a string.', 'Test Case 8 Failed');
  }

  try {
    reverseString([]);
    console.assert(false, 'Test Case 9 Failed: Expected error for non-string input');
  } catch (e) {
    console.assert(e.message === 'Invalid input. Function reverseString expects a string.', 'Test Case 9 Failed');
  }

  console.log('All test cases passed');
} catch (error) {
  console.error(error.message);
}
