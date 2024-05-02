const { expect } = require('chai');
const request = require('request');

// Test our Express app 'GET /' route
describe('Index page', () => {

  it('Returns 200 OK status code', (done) => {
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

// Test our Express app 'GET /cart/:id' route
describe('Test \'GET /cart/:id\' route', () => {

  describe('`id` is a number: 7', () => {
    it('Returns 200 OK status code', (done) => {
      request.get('http://localhost:7865/cart/7', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Returns correct response', (done) => {
      request.get('http://localhost:7865/cart/7', (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 7');
        done();
      });
    });
  });

  describe('`id` is not a number: "AmNotInt"', () => {
    it('Returns 404 Not Found status code', (done) => {
      request.get('http://localhost:7865/cart/AmNotInt', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});

// Test our Express app 'GET /available_payments' route
describe('Test \'GET /available_payments\' route', () => {

  it('Returns 200 OK status code', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns correct response', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});

// Test our Express app 'POST /login' route
describe('Test \'POST /login\' route', () => {

  it('Returns 200 OK status code', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: true,
      body: { userName: 'Youssef' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns correct response with userName: \'Youssef\'', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: true,
      body: { userName: 'Youssef' }
    }, (error, response, body) => {
      expect(body).to.equal('Welcome Youssef');
      done();
    });
  });

  it('Returns correct response with userName: \'Meryam\'', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: true,
      body: { userName: 'Meryam' }
    }, (error, response, body) => {
      expect(body).to.equal('Welcome Meryam');
      done();
    });
  });

  it('Returns correct response with no userName', (done) => {
    request.post({ url: 'http://localhost:7865/login' }, (error, response, body) => {
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});
