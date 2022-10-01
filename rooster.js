// running test on js code using the mocha/node.js framework

const assert = require('assert');

const Rooster = require('../index')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup
      const expected = 'cock-a-doodle-doo!'

      // Exercise
      const actual = Rooster.announceDawn()

      // Verify 
      assert.equal(expected, actual);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Setup
      const inputNumber = 12;
      const expected = '12';

      // Exercise
      const actual = Rooster.timeAtDawn(inputNumber);

      // Verify
      assert.strictEqual(expected, actual);
    });
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const inputNumber = -1;
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected)
    });
    it('throws an error if passed a number greater than 23', () => {
      // Setup 
      const inputNumberTwo = 25;
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumberTwo);
      }, expected)
    })
  });
});
