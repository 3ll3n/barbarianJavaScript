var beerBottle = require('../beer');
var assert = require('assert');

describe('Beer', function() {

  it('should have a type', function() {
    assert.equal("beer", beerBottle.type);
  })

  it('should be full to start with 100', function() {
    assert.equal(100, beerBottle.volume);
  })

  it('should go down to 0 when finished', function() {
    beerBottle.drink();
    assert.equal(0, beerBottle.volume);
  })
  
})