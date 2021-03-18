function splitArrayInGroups(arr, n) {
  var result = [];

  var i, j;
  for (i = 0; i < arr.length / n; i++) {
    result.push(arr.slice(i * n, i * n + n));
  }

  return result;
}

console.log(splitArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
module.exports = splitArrayInGroups;
