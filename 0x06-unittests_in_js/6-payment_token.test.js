const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Test getPaymentTokenFromAPI function', () => {
  it('Test if we pass `true`', (done) => {
    getPaymentTokenFromAPI(true).then((resp) => {
      expect(resp).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
