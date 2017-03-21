var barbarian = require('../barbarian');
var assert = require('assert');

describe('barbarian', function() {

  it('should have a name', function() {
    assert.equal("Conan", barbarian.name);
  })

  it('should have a weapon', function() {
    assert.equal("sword", barbarian.weapon);
  })
})