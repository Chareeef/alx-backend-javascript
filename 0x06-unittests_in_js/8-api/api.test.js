const { expect } = require('chai');
const request = require('request');

// Test our Express app 'GET /' route
describe('Index page', () => {

  it('Returns 200 status code', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns correct response', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
