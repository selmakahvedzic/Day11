var myArray = [];
function multiplyArrayFunction(myArray) {
  var arr = [];

  for (var i = 0; i < myArray.length; i++) {
    var sum = 0,
      product = 1;
    for (var j = 0; j < myArray[i].length; i++) {
      sum += myArray[i][j];
      product *= myArray[i][j];
      arr.push(product, sum);
    }
  }

  return arr;
}

console.log(multiplyArrayFunction([[2], [5, 6, 7], [1, 2]]));
module.exports = multiplyArrayFunction;
