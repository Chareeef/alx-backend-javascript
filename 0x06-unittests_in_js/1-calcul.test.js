// Tests for calculateNumber function
const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('Tests for calculateNumber function', () => {

  describe('Test with SUM', () => {

    it('2 & 2', () => {
      assert.equal(calculateNumber('SUM', 2, 2), 4);
    });

    it('2.49 & 2.49', () => {
      assert.equal(calculateNumber('SUM', 2.49, 2.49), 4);
    });

    it('2.5 & 2.49', () => {
      assert.equal(calculateNumber('SUM', 2.5, 2.49), 5);
    });

    it('-6.3 & 1', () => {
      assert.equal(calculateNumber('SUM', -6.3, 1), -5);
    });

    it('-6.3 & -1', () => {
      assert.equal(calculateNumber('SUM', -6.3, -1), -7);
    });

    it('-6.8 & 1', () => {
      assert.equal(calculateNumber('SUM', -6.8, 1), -6);
    });

    it('-6.8 & -1', () => {
      assert.equal(calculateNumber('SUM', -6.8, -1), -8);
    });

    it('448 & 0.4', () => {
      assert.equal(calculateNumber('SUM', 448, 0.4), 448);
    });

    it('6899 & 3160', () => {
      assert.equal(calculateNumber('SUM', 6899, 3160), 10059);
    });
  });

  describe('Test with SUBTRACT', () => {

    it('2 & 2', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 2), 0);
    });

    it('2.49 & 2.49', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.49, 2.49), 0);
    });

    it('2.5 & 2.49', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.5, 2.49), 1);
    });

    it('-2.5 & -2.5', () => {
      assert.equal(calculateNumber('SUBTRACT', -2.5, -2.5), 0);
    });

    it('-2.5 & -2.50001', () => {
      assert.equal(calculateNumber('SUBTRACT', -2.5, -2.50001), 1);
    });

    it('-6.3 & 1', () => {
      assert.equal(calculateNumber('SUBTRACT', -6.3, 1), -7);
    });

    it('-6.3 & -1', () => {
      assert.equal(calculateNumber('SUBTRACT', -6.3, -1), -5);
    });

    it('-6.8 & 1', () => {
      assert.equal(calculateNumber('SUBTRACT', -6.8, 1), -8);
    });

    it('-6.8 & -1', () => {
      assert.equal(calculateNumber('SUBTRACT', -6.8, -1), -6);
    });

    it('448 & 0.4', () => {
      assert.equal(calculateNumber('SUBTRACT', 448, 0.4), 448);
    });

    it('6899 & 3160', () => {
      assert.equal(calculateNumber('SUBTRACT', 6899, 3160), 3739);
    });
  });

  describe('Test with DIVIDE', () => {

    it('2 & 2', () => {
      assert.equal(calculateNumber('DIVIDE', 2, 2), 1);
    });

    it('2.49 & 2.49', () => {
      assert.equal(calculateNumber('DIVIDE', 2.49, 2.49), 1);
    });

    it('2.5 & 2.49', () => {
      assert.equal(calculateNumber('DIVIDE', 2.5, 2.49), 1.5);
    });

    it('100 & 25', () => {
      assert.equal(calculateNumber('DIVIDE', 100, 25), 4);
    });

    it('25 & 100', () => {
      assert.equal(calculateNumber('DIVIDE', 25, 100), 0.25);
    });

    it('-6.3 & 1', () => {
      assert.equal(calculateNumber('DIVIDE', -6.3, 1), -6);
    });

    it('-6.3 & -1', () => {
      assert.equal(calculateNumber('DIVIDE', -6.3, -1), 6);
    });

    it('-6.8 & 1', () => {
      assert.equal(calculateNumber('DIVIDE', -6.8, 1), -7);
    });

    it('-6.8 & -1', () => {
      assert.equal(calculateNumber('DIVIDE', -6.8, -1), 7);
    });

    it('448 & 0', () => {
      assert.equal(calculateNumber('DIVIDE', 448, 0), 'Error');
    });

    it('448 & 0.4', () => {
      assert.equal(calculateNumber('DIVIDE', 448, 0.4), 'Error');
    });
  });
});
