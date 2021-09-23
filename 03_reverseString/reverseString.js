// Function to reverse a given string

// input string would be str here
const reverseString = function (str) {
  // Javascript methods
  // split("") will split each string character
  // reverse() will reverse the split characters
  // join("") will join the reversed character into string again
  return str.split("").reverse().join("");
};

module.exports = reverseString;
