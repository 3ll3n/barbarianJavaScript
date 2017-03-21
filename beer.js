var favBeer = {
  type: "beer",
  container: "bottle",
  volume: 100,
  drink: function() {
    this.volume = 0;
  }
}

module.exports = favBeer;