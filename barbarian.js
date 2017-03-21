var barbarian = {
  name: "Conan",
  weapon: "sword",
  health: 100,
  angerLevel: 1,
  favBeer: "beer",
  drink: function(drink) {
    if(this.favBeer == drink.type){
      this.health += 10;
    } else {
      (this.favBeer != drink.type) 
        this.angerLevel += 10;
    }
  }
}

module.exports = barbarian;