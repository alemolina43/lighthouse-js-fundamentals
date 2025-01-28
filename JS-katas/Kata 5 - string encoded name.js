const urlEncode = function (text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newText += "%20";
    } else {
      newText += text[i];
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs")); //returns "Lighthouse%20Labs"
console.log(urlEncode(" Lighthouse Labs ")); //returns "%20Lighthouse%20Labs%20"
console.log(urlEncode("blue is greener than purple for sure")); // returns "blue%20is%20greener%20than%20purple%20for%20sure"