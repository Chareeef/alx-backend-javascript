const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

chai.use(require('chai-as-promised'));

describe('Test getPaymentTokenFromAPI function', () => {
  it('Test if we pass `true`', () => {
    return expect(getPaymentTokenFromAPI(true)).to.eventually.deep.equal({ data: 'Successful response from the API' });
  });
});
