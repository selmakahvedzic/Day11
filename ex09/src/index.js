function myBouncer(arr) {
  var myArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i] != 0 &&
      arr[i] != null &&
      arr[i] != false &&
      arr[i] != undefined &&
      arr[i] != "" &&
      arr[i] != NaN
    ) {
      myArr.push(arr[i]);
    }
  }
  return myArr;
}

console.log(myBouncer(["a", "b", "c", 0, false, undefined, ""]));
module.exports = myBouncer;
