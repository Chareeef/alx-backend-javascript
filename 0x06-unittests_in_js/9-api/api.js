const express = require('express');

// Create app
const app = express();
const port = 7865

// 'GET /' route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// 'GET /cart/:id' route
app.get(/^\/cart\/(\d+)$/, (req, res) => {
  res.send(`Payment methods for cart ${req.params[0]}`);
});

// Start server
app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
