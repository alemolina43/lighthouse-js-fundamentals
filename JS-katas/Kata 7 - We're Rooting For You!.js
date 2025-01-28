const judgeVegetables = function (vegetables, metric) {
  let mostRed = vegetables[0].redness;
  let mostPlump = vegetables[0].plumpness;
  let winnerRed = vegetables[0];
  let winnerPlump = vegetables[0];

  for (let i = 1; i < vegetables.length; i++) {
    if (vegetables[i].redness > mostRed) {
      mostRed = vegetables[i].redness;
      winnerRed = vegetables[i]; // Set this vegetable as the winner for redness
    }

    if (vegetables[i].plumpness > mostPlump) {
      mostPlump = vegetables[i].plumpness;
      winnerPlump = vegetables[i]; // Set this vegetable as the winner for plumpness
    }
  }

  if (metric === "redness") {
    return winnerRed;
  } else if (metric === "plumpness") {
    return winnerPlump;
  }
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

console.log(judgeVegetables(vegetables, "redness")); // returns Old Man Franklin...
console.log(judgeVegetables(vegetables, "plumpness")); // returns Sally Tomato-Grower
