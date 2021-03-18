function myMutation(arr) {
  var value1 = arr[0];
  var value2 = arr[1];
  for (var i = 0; i < value2.length; i++) {
    if (value1.indexOf(value2.charAt(i)) !== -1) return true;
    else return false;
  }
}
console.log(myMutation([["Hello"], ["hello"]]));
module.exports = myMutation;
