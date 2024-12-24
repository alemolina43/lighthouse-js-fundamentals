const checkAir = function (samples, threshold) {
  //let strings = samples.length;
  let quality = 0;
  let percentage = 0;

  for (let i = 0; i < samples.length; i++) {
    //console.log(samples[i]);
    if (samples[i] === "dirty") {
      quality++;
    }
  }
  percentage = quality / samples.length;

  return percentage > threshold ? "Polluted" : "Clean";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);
console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
