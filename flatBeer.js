var flatBeer = {
  type: "flatBeer",
  container: "bottle",
  volume: 100,
  drink: function() {
    this.volume = 0;
  }
}

module.exports = flatBeer;