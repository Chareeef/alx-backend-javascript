// Tests for calculateNumber function
const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('Test rounding two numbers and returning the sum', () => {

  it('2 & 2', () => {
    assert.equal(calculateNumber(2, 2), 4);
  });

  it('2.49 & 2.49', () => {
    assert.equal(calculateNumber(2.49, 2.49), 4);
  });

  it('2.5 & 2.49', () => {
    assert.equal(calculateNumber(2.5, 2.49), 5);
  });

  it('-6.3 & 1', () => {
    assert.equal(calculateNumber(-6.3, 1), -5);
  });

  it('-6.3 & -1', () => {
    assert.equal(calculateNumber(-6.3, -1), -7);
  });

  it('-6.8 & 1', () => {
    assert.equal(calculateNumber(-6.8, 1), -6);
  });

  it('-6.8 & -1', () => {
    assert.equal(calculateNumber(-6.8, -1), -8);
  });

  it('6899 & 3160', () => {
    assert.equal(calculateNumber(6899, 3160), 10059);
  });

});
