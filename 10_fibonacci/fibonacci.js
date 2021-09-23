// function returns fibbonacci series

// reference taken from the odin project git repo

const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;

  // code in the comment works same
  //   num = parseInt(count);
  //   let array = [];
  //   array[0] = 1;
  //   array[1] = 1;
  //   for (let i = 2; i <= count; i++) {
  //     array[i] = array[i - 2] + array[i - 1];
  //   }
  //   return count < 0 ? "OOPS" : array[count - 1];
};

module.exports = fibonacci;
