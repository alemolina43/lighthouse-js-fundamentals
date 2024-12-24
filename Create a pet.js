const pet = {
  hunger: 0,
  energy: 0,
  playfulness: 0,
  feed: function () {
    pet.hunger++;
    return pet.hunger;
  },
  sleep: function () {
    pet.energy++;
    return pet.energy;
  },
  play: function () {
    pet.playfulness++;
    return pet.playfulness;
  },
  status: function () {
    console.log(`Pet Status - Hunger:${pet.hunger} Energy:${pet.energy} Playfulness:${pet.playfulness}`);
  }
};


pet.feed();
pet.sleep();
pet.sleep();
pet.play();
pet.play();
pet.play();
pet.status();
