// function returns if input is palidrome or not (boolean value)
// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks

const palindromes = function (input) {
  // toLowerCase() returns lower case value of input
  // (/[^\w]|_/g, "") is regular expression
  // replace() filter out mentioned regular expression

  input = input.toLowerCase().replace(/[^\w]|_/g, "");

  // Javascript methods
  // split("") will split each string character
  // reverse() will reverse the split characters
  // join("") will join the reversed character into string again

  let string = input.split("").reverse().join("");

  // compare both reversed and input string (return boolean value)
  return string === input;
};

module.exports = palindromes;
