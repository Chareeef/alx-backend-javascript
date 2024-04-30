#!/usr/bin/node
const { createServer } = require('http');

// Create an http server
const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
}).listen(1245);

module.exports = app;
