var myNestedArray = [["Toblerone", 5],
  ["Milka", 3]];

function myNestedFunction(arr) {
  var myNestedArray = [...arr];
  return myNestedArray;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;
