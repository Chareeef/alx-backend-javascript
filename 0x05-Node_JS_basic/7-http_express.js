#!/usr/bin/node
const express = require('express');
const { readFile } = require('fs');

// Create an Express app
const app = express();

// Define 'GET /' route
app.get('/', ((req, res) => {
  res.send('Hello Holberton School!');
}));

function writeStudents(path) {
  // Return a promise
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', ((err, data) => {
      // Reject with an error if some problem araised
      if (err) {
        const error = new Error('Cannot load the database');
        reject(error);
      } else {
        // Response to resolve
        let response = '';

        // Read and parse data
        const lines = data.split('\n').filter((line) => line !== '').slice(1);
        const items = lines.map((line) => line.split(','));

        // Log students number
        response += `Number of students: ${items.length}`;

        // Group students by their study fields
        const studentsByFields = {};
        items.forEach((item) => {
          const firstName = item[0];
          const field = item[3];

          if (!studentsByFields[field]) {
            studentsByFields[field] = [firstName];
          } else {
            studentsByFields[field].push(firstName);
          }
        });

        // Display studentsByFields
        for (const field in studentsByFields) {
          if (Object.hasOwnProperty.call(studentsByFields, field)) {
            const names = studentsByFields[field].join(', ');
            const count = studentsByFields[field].length;
            response += `\nNumber of students in ${field}: ${count}. List: ${names}`;
          }
        }

        // Resolve the promise withe response
        resolve(response);
      }
    }));
  });
}

// Define 'GET /students' route
app.get('/students', ((req, res) => {
  writeStudents(process.argv[2])
    .then((data) => res.send(`This is the list of our students\n${data}`))
    .catch((error) => res.send(`This is the list of our students\n${error.message}`));
}));

// Listen on port 1245
app.listen(1245);

// Export the app
module.exports = app;
