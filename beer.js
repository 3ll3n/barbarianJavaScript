var beer = {
  type: "beer",
  container: "bottle",
  volume: 100,
  drink: function() {
    this.volume = 0;
  }
}

module.exports = beer;