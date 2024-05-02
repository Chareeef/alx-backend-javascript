const express = require('express');

// Create app
const app = express();
const port = 7865

// 'GET /' route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
// Start server
app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
