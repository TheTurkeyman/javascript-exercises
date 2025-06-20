const sumAll = function(a,b) {
  let result = 0;
  if (a > b) {
for (let i = a; i >= b; i--)
  result = a + b +i;
}
else {
for (let i = b; i >= a; i--)
  result = a + b + i;
};
  return result; }

// Do not edit below this line
module.exports = sumAll;
