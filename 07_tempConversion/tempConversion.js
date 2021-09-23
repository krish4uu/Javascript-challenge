// refer temperature formula for more info

const ftoc = function (fTemp) {
  // refer code in the comment

  return Math.round((fTemp - 32) * (5 / 9) * 10) / 10;

  // let cResult = ((fTemp - 32) * 5) / 9;
  // let cRounded = Math.round(cResult * 10) / 10;
  // return cRounded;
};

const ctof = function (cTemp) {
  // refer code in the comment

  return Math.round(((cTemp * 9) / 5 + 32) * 10) / 10;

  // let fResult = (cTemp * 9) / 5 + 32;
  // let fRounded = Math.round(fResult * 10) / 10;
  // return fRounded;
};

module.exports = {
  ftoc,
  ctof,
};
