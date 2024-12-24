const chooseStations = function (stations) {
  let goodStations = [];

  for (let stat of stations) {
    if (
      stat[1] >= 20 &&
      (stat[2] === "school" || stat[2] === "community centre")
    ) {
      goodStations.push(stat[0]);
    }
  }
  return goodStations;
};

console.log(
  chooseStations([
    ["Big Bear Donair", 10, "restaurant"],
    ["Bright Lights Elementary", 50, "school"],
    ["Moose Mountain Community Centre", 45, "community centre"]
  ])
);
