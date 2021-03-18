var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  var i,
    j = 0;

  for (i = 0; i < temps.length; i++) {
    var avg = 0;
    var sum = 0;
    for (j = 0; j < 4; j++) {
      sum += newTemps[i][j];
      avg = sum / 4;
    }
    averageDayTemp.push(avg);
  }

  return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
