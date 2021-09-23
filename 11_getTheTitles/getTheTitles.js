// function returns array of book title

const getTheTitles = function (arr) {
  // map() loop through arr and returns only title

  return arr.map((book) => book.title);
};

module.exports = getTheTitles;
