// Tests for calculateNumber function
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('Tests for calculateNumber function using `chai`', () => {

  describe('Test with SUM', () => {

    it('2 & 2', () => {
      expect(calculateNumber('SUM', 2, 2)).to.equal(4);
    });

    it('2.49 & 2.49', () => {
      expect(calculateNumber('SUM', 2.49, 2.49)).to.equal(4);
    });

    it('2.5 & 2.49', () => {
      expect(calculateNumber('SUM', 2.5, 2.49)).to.equal(5);
    });

    it('-6.3 & 1', () => {
      expect(calculateNumber('SUM', -6.3, 1)).to.equal(-5);
    });

    it('-6.3 & -1', () => {
      expect(calculateNumber('SUM', -6.3, -1)).to.equal(-7);
    });

    it('-6.8 & 1', () => {
      expect(calculateNumber('SUM', -6.8, 1)).to.equal(-6);
    });

    it('-6.8 & -1', () => {
      expect(calculateNumber('SUM', -6.8, -1)).to.equal(-8);
    });

    it('448 & 0.4', () => {
      expect(calculateNumber('SUM', 448, 0.4)).to.equal(448);
    });

    it('6899 & 3160', () => {
      expect(calculateNumber('SUM', 6899, 3160)).to.equal(10059);
    });
  });

  describe('Test with SUBTRACT', () => {

    it('2 & 2', () => {
      expect(calculateNumber('SUBTRACT', 2, 2)).to.equal(0);
    });

    it('2.49 & 2.49', () => {
      expect(calculateNumber('SUBTRACT', 2.49, 2.49)).to.equal(0);
    });

    it('2.5 & 2.49', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 2.49)).to.equal(1);
    });

    it('-2.5 & -2.5', () => {
      expect(calculateNumber('SUBTRACT', -2.5, -2.5)).to.equal(0);
    });

    it('-2.5 & -2.50001', () => {
      expect(calculateNumber('SUBTRACT', -2.5, -2.50001)).to.equal(1);
    });

    it('-6.3 & 1', () => {
      expect(calculateNumber('SUBTRACT', -6.3, 1)).to.equal(-7);
    });

    it('-6.3 & -1', () => {
      expect(calculateNumber('SUBTRACT', -6.3, -1)).to.equal(-5);
    });

    it('-6.8 & 1', () => {
      expect(calculateNumber('SUBTRACT', -6.8, 1)).to.equal(-8);
    });

    it('-6.8 & -1', () => {
      expect(calculateNumber('SUBTRACT', -6.8, -1)).to.equal(-6);
    });

    it('448 & 0.4', () => {
      expect(calculateNumber('SUBTRACT', 448, 0.4)).to.equal(448);
    });

    it('6899 & 3160', () => {
      expect(calculateNumber('SUBTRACT', 6899, 3160)).to.equal(3739);
    });
  });

  describe('Test with DIVIDE', () => {

    it('2 & 2', () => {
      expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
    });

    it('2.49 & 2.49', () => {
      expect(calculateNumber('DIVIDE', 2.49, 2.49)).to.equal(1);
    });

    it('2.5 & 2.49', () => {
      expect(calculateNumber('DIVIDE', 2.5, 2.49)).to.equal(1.5);
    });

    it('100 & 25', () => {
      expect(calculateNumber('DIVIDE', 100, 25)).to.equal(4);
    });

    it('25 & 100', () => {
      expect(calculateNumber('DIVIDE', 25, 100)).to.equal(0.25);
    });

    it('-6.3 & 1', () => {
      expect(calculateNumber('DIVIDE', -6.3, 1)).to.equal(-6);
    });

    it('-6.3 & -1', () => {
      expect(calculateNumber('DIVIDE', -6.3, -1)).to.equal(6);
    });

    it('-6.8 & 1', () => {
      expect(calculateNumber('DIVIDE', -6.8, 1)).to.equal(-7);
    });

    it('-6.8 & -1', () => {
      expect(calculateNumber('DIVIDE', -6.8, -1)).to.equal(7);
    });

    it('448 & 0', () => {
      expect(calculateNumber('DIVIDE', 448, 0)).to.equal('Error');
    });

    it('448 & 0.4', () => {
      expect(calculateNumber('DIVIDE', 448, 0.4)).to.equal('Error');
    });
  });
});
