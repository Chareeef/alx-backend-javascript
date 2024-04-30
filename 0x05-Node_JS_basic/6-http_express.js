#!/usr/bin/node
const express = require('express');

// Create an Express app
const app = express();

// Define 'GET /' route
app.get('/', ((req, res) => {
  res.send('Hello Holberton School!');
}));

// Listen on port 1245
app.listen(1245);

// Export the app
module.exports = app;
