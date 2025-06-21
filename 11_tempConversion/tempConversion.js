const convertToCelsius = function(f) {
 let C = (f - 32) / 1.8;
 return C.toFixed(1);
};

const convertToFahrenheit = function(c) {
  let F = c * 1.8 + 32;
  return F.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
