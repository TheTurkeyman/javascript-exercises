const sumAll = function(a,b) {
if (a > b)
{[a, b] = [b, a];}
let result = 0;
  for (let i = a; i >= b; i--)
   {result += i;}
  return result; };

// Do not edit below this line
module.exports = sumAll;
