// the function will return input string *num times

const repeatString = function (str, num) {
  // if the number is negative, it will return "error"
  if (num < 0) {
    return "ERROR";
  }
  // Javascript repeat() method will return string *num times
  else {
    return str.repeat(num);
  }
};

module.exports = repeatString;
