const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe ('Make sure the math used for sendPaymentRequestToApi is the same as Utils.calculateNumber', () => {
  it('Test with sendPaymentRequestToApi(100, 20)', () => {
	  const spyCalculateNumber = sinon.spy(Utils, 'calculateNumber');
	  sendPaymentRequestToApi(100, 20);
	  expect(spyCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
	  spyCalculateNumber.restore();
  });
});
