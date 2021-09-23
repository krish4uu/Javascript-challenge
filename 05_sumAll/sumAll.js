// function returns the sum of every number between num1 and num2(including them)

const sumAll = function (num1, num2) {
  // give intial value "0" to variable sum

  let sum = 0;

  // check for any negative number, if so return "error"

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  // check if given number is integer type, or return "error"

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

  // give smallest value as initial value

  if (num1 > num2) {
    // initialize the for loop

    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  }

  return sum;
};

module.exports = sumAll;
