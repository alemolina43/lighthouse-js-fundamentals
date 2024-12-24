const sumLargestNumbers = function (data) {
  let largest1 = data[0];
  let largest2 = data[1];

  if (largest2 > largest1) {
    [largest1, largest2] = [largest2, largest1];
  }

  for (let i = 2; i < data.length; i++) {
    if (data[i] > largest1) {
      largest2 = largest1;
      largest1 = data[i];
    } else if (data[i] > largest2) {
      largest2 = data[i];
    }
  }

  return largest1 + largest2;
};

console.log(sumLargestNumbers([1, 10])); //returns 11
console.log(sumLargestNumbers([1, 2, 3])); //returns 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //returns 126
