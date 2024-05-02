const chai = require('chai');
const expect = chai.expect;
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
	describe('type == DIVIDE', () => {
		it('rounded positive', () => {
    		assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
		});

		it('rounded negative', () => {
    		assert.strictEqual(calculateNumber('DIVIDE', -6, -3), 2);
		});

		it('rounded positive and negative', () => {
    		assert.strictEqual(calculateNumber('DIVIDE', 6, -3), -2);
		});

		it('non-rounded positive', () => {
		    assert.strictEqual(calculateNumber('DIVIDE', 6.3, 3.2), 2);
		});
		
		it('non-rounded negative', () => {
		    assert.strictEqual(calculateNumber('DIVIDE', -6.5, -3.5), 2);
		});
		
		it('non-rounded negative and positive', () => {
		    assert.strictEqual(calculateNumber('DIVIDE', 5.5, -3.5), -2);
		});
		
		it('division by zero', () => {
		    assert.strictEqual(calculateNumber('DIVIDE', 7, 0), 'Error');
		});

	});
    describe('type == SUM', () => {
        it('rounded positive', () => {
            expect(calculateNumber('SUM', 2, 3)).to.equal(5);
        });

        it('rounded negative', () => {
            expect(calculateNumber('SUM', -2, -1)).to.equal(-3);
        });

        it('rounded positive and negative', () => {
            expect(calculateNumber('SUM', 2, -3)).to.equal(-1);
        });

        it('non-rounded positive', () => {
            expect(calculateNumber('SUM', 2.1, 3.9)).to.equal(6);
        });

        it('non-rounded negative', () => {
            expect(calculateNumber('SUM', -5.5, -9.0)).to.equal(-14);
        });

        it('non-rounded negative and positive', () => {
            expect(calculateNumber('SUM', -2.3, 4.7)).to.equal(3);
        });
    });
    describe('type == SUBTRACT', () => {
        it('rounded positive', () => {
            expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
        });

        it('rounded negative', () => {
            expect(calculateNumber('SUBTRACT', -3, -2)).to.equal(-1);
        });

        it('rounded positive and negative', () => {
            expect(calculateNumber('SUBTRACT', 3, -2)).to.equal(5);
        });

        it('non-rounded positive', () => {
            expect(calculateNumber('SUBTRACT', 3.9, 2.1)).to.equal(2);
        });

        it('non-rounded negative', () => {
            expect(calculateNumber('SUBTRACT', -9.0, -5.5)).to.equal(-4);
        });

        it('non-rounded negative and positive', () => {
            expect(calculateNumber('SUBTRACT', 4.7, -2.3)).to.equal(7);
        });
    });
    describe('type == DIVIDE', () => {
        it('rounded positive', () => {
            expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
        });

        it('rounded negative', () => {
            expect(calculateNumber('DIVIDE', -6, -3)).to.equal(2);
        });

        it('rounded positive and negative', () => {
            expect(calculateNumber('DIVIDE', 6, -3)).to.equal(-2);
        });

        it('non-rounded positive', () => {
            expect(calculateNumber('DIVIDE', 6.3, 3.2)).to.equal(2);
        });

        it('non-rounded negative', () => {
            expect(calculateNumber('DIVIDE', -6.8, -3.5)).to.equal(2);
        });

        it('non-rounded negative and positive', () => {
            expect(calculateNumber('DIVIDE', 5.5, -3.5)).to.equal(-2);
        });

        it('division by zero', () => {
            expect(calculateNumber('DIVIDE', 7, 0)).to.equal('Error');
        });
    });
});
