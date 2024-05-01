const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Test sendPaymentRequestToApi behavior', () => {
  it('Test with sendPaymentRequestToApi(100, 20)', () => {
    // Stub Utils.calculateNumber
    const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber');
    stubCalculateNumber.returns(10);

    // Spy console.log
    const spyConsoleLog = sinon.spy(console, 'log')

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(100, 20);

    expect(stubCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsoleLog.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore stub and spy
    stubCalculateNumber.restore();
    spyConsoleLog.restore();
  });
});
