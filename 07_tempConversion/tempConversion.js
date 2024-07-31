const convertToCelsius = function(degF) {

  let degC = (degF - 32) * (5 / 9);
  return round(degC, 1);
};

const convertToFahrenheit = function(degC) {
  let degF = (degC * (9/5)) + 32;
  return round(degF, 1);
};

const round = function(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
