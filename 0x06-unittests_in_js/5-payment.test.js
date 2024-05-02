const Utils = require('./utils');
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('Test sendPaymentRequestToApi behavior', () => {

  let spyCalculateNumber;
  let spyConsoleLog;

  beforeEach(() => {
    spyCalculateNumber = sinon.spy(Utils, 'calculateNumber');

    spyConsoleLog = sinon.spy(console, 'log')
  });

  afterEach(() => {
    spyCalculateNumber.restore();
    spyConsoleLog.restore();
  });

  it('Test with sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsoleLog.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('Test with sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyCalculateNumber.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(spyConsoleLog.calledOnceWithExactly('The total is: 20'))
  });
});
