// functions return the calculation formula

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sumAll = 0;
  if (array === []) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    sumAll += array[i];
  }
  return sumAll;
};

const multiply = function (array) {
  // reduce() method will loop through array and returns the multiplied values

  return (multiAll = array.reduce((prev, current) => prev * current));
};

const power = function (num, value) {
  // in-build Math.pow() method is used

  return Math.pow(num, value);
};

// refer factorial formula

const factorial = function (num) {
  // factorial of "1" or "0" gives "1"

  if (num === 0 || num === 1) {
    return 1;
  }

  // loop back(i--) from the given number till "1"
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
