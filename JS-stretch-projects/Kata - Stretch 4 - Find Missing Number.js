const findMissingNumber = function (arr) {
  let missingNum = [];
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] + 1 !== arr[i + 1]) {
      missingNum.push(arr[i] + 1);
    }
    i++;
  }

  return missingNum;
};

console.log(
  findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]),
  findMissingNumber([100, 101, 102, 103, 105, 106, 107]),
  findMissingNumber([-3, -2, -1, 1, 2, 3])
);
