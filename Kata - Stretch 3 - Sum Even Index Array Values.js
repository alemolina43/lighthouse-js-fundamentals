const sumEvenIndices = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      total += arr[i];
    }
  }
  return total;
};

console.log(sumEvenIndices([1, 2, 3, 4, 5, 6, 7])); //returns 16
console.log(sumEvenIndices([3, 6, 9, 100, 1])); //returns 13
