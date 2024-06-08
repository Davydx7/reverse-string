// ANSI color codes
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  reset: '\x1b[0m'
};

// colorize function
const colorize = (text, color) => `${colors[color]}${text}${colors.reset}`;

let allPassed = { value: true };

function assert({ actual, expected, testCase }) {
  if (actual === expected) {
    console.log(colorize(`Test Case ${testCase} Passed`, 'green'));
  } else {
    console.error(colorize(`Test Case ${testCase} failed`, 'red') + `\nExpected: "${colorize(expected, 'green')}"\nReceived: "${colorize(actual, 'red')}"\n`);
    allPassed.value = false;
  }
};

export {
  assert,
  colorize,
  allPassed,
};
