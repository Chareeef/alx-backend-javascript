const Utils = require('./utils');

// Compute payment
module.exports = function sendPaymentRequestToApi(totalAmoumt, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmoumt, totalShipping);
  console.log(`The total is: ${total}`);
};
