#!/usr/bin/node
const { createServer } = require('http');
const { readFile } = require('fs');

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
        response += `Number of students: ${items.length}\n`;

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
            response += `Number of students in ${field}: ${count}. List: ${names}\n`;
          }
        }

        // Resolve the promise withe response
        resolve(response);
      }
    }));
  });
}

// Create an http server
const app = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    writeStudents(process.argv[2])
      .then((data) => res.end(data))
      .catch((error) => {
        res.end(error.stack + '\n');
      });
  }
}).listen(1245);

module.exports = app;
