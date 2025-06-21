const leapYears = function(arr) {
  arr.some(item => (return item % 4 == 0 && item % 100 !== 0) || (item % 400 == 0));

};

// Do not edit below this line
module.exports = leapYears;
