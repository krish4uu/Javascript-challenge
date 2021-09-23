// function removes the other arguments from the array
// refer ES6 for (...input)

const removeFromArray = function (array, ...inputs) {
  // array.filter() is used to filter through the array
  // ((item) => !inputs.includes(item)) will loop through the array and filter out the input arguments from array

  return array.filter((item) => !inputs.includes(item));
};

module.exports = removeFromArray;
