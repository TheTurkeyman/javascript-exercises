const add = function(a,b) {
	return a + b;
	
	
};

const subtract = function(a,b) {
	return a - b;
	
};

const sum = function(arr) {
	return arr.reduce((a,b) => a + b, 0);
	
};

const multiply = function(a,b) {
	return a * b;

};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0 || num === 1)
		return 1;
	for (let i = num - 1; i >= 1; i--)
	{ num *= i};
	return num;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
