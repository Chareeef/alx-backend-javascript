const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Make sure the math used for sendPaymentRequestToApi is the same as Utils.calculateNumber', () => {
  it('Test with sendPaymentRequestToApi(100, 20)', () => {
    // Spy Utils.calculateNumber
    const spyCalculateNumber = sinon.spy(Utils, 'calculateNumber');

    // Call sendPaymentRequestToApi
    sendPaymentRequestToApi(100, 20);

    expect(spyCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore Utils.calculateNumber
    spyCalculateNumber.restore();
  });
});
