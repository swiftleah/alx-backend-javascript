const Utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmoumt, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmoumt, totalShipping);
  console.log(`The total is: ${total}`);
};
