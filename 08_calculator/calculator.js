const add = function(a, b) {
  return a + b;
};

const subtract = function(a,b) {
	return add(a, -b);
};

const sum = function(arr) {
	return arr.reduce((total, c) => {
    return add(total, c);
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
    return total * current;
  })
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
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
