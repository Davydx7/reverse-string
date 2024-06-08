import reverseString from '../dist/index.js';
import { assert, colorize, allPassed } from './utils.test.js';

// Test cases
assert({
  actual: reverseString('hello'),
  expected: 'olleh',
  testCase: 1
});

assert({
  actual: reverseString('world'),
  expected: 'dlrow',
  testCase: 2
});

assert({
  actual: reverseString(''),
  expected: '',
  testCase: 3
});

assert({
  actual: reverseString('a'),
  expected: 'a',
  testCase: 4
});

assert({
  actual: reverseString('ab'),
  expected: 'ba',
  testCase: 5
});
assert({
  actual: reverseString('racecar'),
  expected: 'racecar',
  testCase: 6
});


// Invalid input cases
try {
  reverseString(123);
  console.error(colorize('Test Case 7 Failed: Expected error for number input', 'red'));
  allPassed.value = false;
} catch (e) {
  assert({
    actual: e.message,
    expected: 'Invalid input. Function reverseString expects a string. but got number instead.',
    testCase: 7
  });
}

try {
  reverseString({});
  console.error(colorize('Test Case 8 Failed: Expected error for object input', 'red'));
  allPassed.value = false;
} catch (e) {
  assert({
    actual: e.message,
    expected: 'Invalid input. Function reverseString expects a string. but got object instead.',
    testCase: 8
  });
}

try {
  reverseString([]);
  console.error(colorize('Test Case 9 Failed: Expected error for array input', 'red'));
  allPassed.value = false;
} catch (e) {
  assert({
    actual: e.message,
    expected: 'Invalid input. Function reverseString expects a string. but got object instead.',
    testCase: 9
  });
}

if (allPassed.value) {
  console.log(colorize('All test cases passed', 'green'));
  process.exit(0);
} else {
  console.error(colorize(colorize('Some test cases failed', 'red'), 'red'));
  process.exit(1);
};
