const reverseWords = function (str) {
  let arr = str.split(" ");
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const words = arr[i];
    reversedArray.push(words);
  }
  return reversedArray.join(" ");
};

console.log(reverseWords("hello and welcome to Lighthouse Labs"));
console.log(reverseWords("am I Yoda"));
