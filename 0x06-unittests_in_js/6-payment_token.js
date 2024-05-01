// Return resolved Promise if `success` is true
module.exports = function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}
