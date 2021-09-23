const leapYears = function (year) {
  // refer leap year formula

  // refer code in the comment for understanding
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

  //   if (year % 100 === 0 && year % 400 !== 0) {
  //     return false;
  //   } else if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};

module.exports = leapYears;
