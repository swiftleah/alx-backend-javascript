const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber tests', () => {
	describe('type == SUM', () => {
		it('rounded positive', () => {
			assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
		});

		it('rounded negative', () => {
			assert.strictEqual(calculateNumber('SUM', -2, -1), -3);
		});

		it('rounded positive and negative', () => {
			assert.strictEqual(calculateNumber('SUM', 2, -3), -1);
		});

		it('non-rounded positive', () => {
			assert.strictEqual(calculateNumber('SUM', 2.1, 3.9), 6);
		});

		it('non-rounded negative', () => {
			assert.strictEqual(calculateNumber('SUM', -5.5, -9.0), -14);
		});

		it('non-rounded negative and positive', () => {
			assert.strictEqual(calculateNumber('SUM', -2.3, 4.7), 3);
		});
	});
	describe('type == SUBTRACT', () => {
		it('rounded positive', () => {
    			assert.strictEqual(calculateNumber('SUBTRACT', 3, 2), 1);
		});

		it('rounded negative', () => {
    			assert.strictEqual(calculateNumber('SUBTRACT', -3, -2), -1);
		});

		it('rounded positive and negative', () => {
    			assert.strictEqual(calculateNumber('SUBTRACT', 3, -2), 5);
		});

		it('non-rounded positive', () => {
    			assert.strictEqual(calculateNumber('SUBTRACT', 3.9, 2.1), 2);
		});

		it('non-rounded negative', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', -9.0, -5.5), -4);
		});

		it('non-rounded negative and positive', () => {
    			assert.strictEqual(calculateNumber('SUBTRACT', 4.7, -2.3), 7);
		});

	});
});
