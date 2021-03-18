function largestNumFromArr(arr) {
  var maxNumArray = [];
  var i,
    j = 0;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      var max = arr[i][0];
      if (arr[i][j-1] < arr[i][j]) {
        max = arr[i][j];
      }
      
    }
    maxNumArray.push(max);
  }
  return maxNumArray;
}

console.log(
  largestNumFromArr([
    [13, 27, 8, 9],
    [22, 3, 5, 38],
    [5, 5, 486, 5],
    [86, 6, 7, 856],
  ])
);
module.export = largestNumFromArr;
