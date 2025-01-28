const instructorWithLongestName = function (instructors) {
  let longerName = instructors[0];

  for (let i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > longerName.name.length) {
      longerName = instructors[i];
    }
  }

  return longerName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);