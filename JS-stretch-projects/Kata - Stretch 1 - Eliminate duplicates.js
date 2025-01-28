const removeDuplicates = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      } else {
        j++;
      }
    }
  }
  return arr;
};

console.log(removeDuplicates([1, 2, 2, 2, 3, 4, 5]));
console.log(removeDuplicates(["a", "b", "b", "c", "d", "e", "e", "a", "f"]));
