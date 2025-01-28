const arrayIntersections = function (arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
};

console.log(
  arrayIntersections([-2, -1, 1, 2, 3], [1, 2, 3, 4, 5, 6]), //returns [1, 2, 3]
  arrayIntersections(["dog", "cat", "fish"], ["centipede", "fish", "bird"]), //returns ['fish']
  arrayIntersections([1, "hello", true], [2, "goodbye", true]) //returns [true]
);
