var barbarian = require('../barbarian');
var assert = require('assert');
var beer = require('../beer');
var flatBeer = require('../flatBeer');

describe('barbarian', function() {

  it('should have a name', function() {
    assert.equal("Conan", barbarian.name);
  })

  it('should have a weapon', function() {
    assert.equal("sword", barbarian.weapon);
  })

  it('should have health', function() {
    assert.equal(100, barbarian.health);
  })

  it('should have an anger level', function() {
    assert.equal(1, barbarian.angerLevel);
  })

  it('should have a favourite beer', function() {
    assert.equal("beer", barbarian.favBeer);
  })

  it('health should increase when drinking favBeer', function() {
    barbarian.drink(beer);
    assert.equal(110, barbarian.health);
  })

  it('anger should increase when drinking not favBeer', function() {
    barbarian.drink(flatBeer);
    assert.equal(11, barbarian.angerLevel);
  })

})