/**
 * tests for function calculateNumber
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it('should return sum of 2 rounded numbers', () => {
		assert.strictEqual(calculateNumber(1, 6), 7);
	});

	it('round down a and round up b', () => {
		assert.strictEqual(calculateNumber(2.2, 3.5), 6);
	});

	it('a whole and b round up', () => {
		assert.strictEqual(calculateNumber(2, 5.9), 8);
	});

	it('round up a and round up b', () => {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});
});
