function mySplice(arr1, arr2, n) {

  return arr2.splice(n, 0, arr1);
  
}

console.log(mySplice([[1, 2, 3], [4, 5], 1]));
module.exports = mySplice;
