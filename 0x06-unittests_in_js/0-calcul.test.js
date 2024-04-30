/**
 * tests for function calculateNumber
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it('should return sum of 2 rounded numbers', () => {
		assert.strictEqual(calculateNumber(1, 6), 7);
		assert.strictEqual(calculateNumber(2.2, 3.5), 6);
		assert.strictEqual(calculateNumber(2, 5.9), 8);
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});
});
