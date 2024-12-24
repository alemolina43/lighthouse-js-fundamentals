const multiDimensionalArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumOfArrays() {
  let total = 0;
  for (let key of multiDimensionalArr) {
    for (let val of key) {
      total += val;
    }
  }
  return total;
}

console.log(sumOfArrays());
