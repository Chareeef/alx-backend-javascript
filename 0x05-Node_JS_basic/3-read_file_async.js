#!/usr/bin/node
const { readFile } = require('fs');

/* Read Asynchronously the Database CSV file
 *
 * Output example:
 *
 * Number of students: 10
 * Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
 * Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
 */
module.exports = function countStudents(path) {
  // Return a promise
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', ((err, data) => {
      // Reject with an error if some problem araised
      if (err) {
        const error = new Error('Cannot load the database');
        reject(error);
      } else {
        // Read and parse data
        const lines = data.split('\n').filter((line) => line !== '').slice(1);
        const items = lines.map((line) => line.split(','));

        // Log students number
        console.log(`Number of students: ${items.length}`);

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
            console.log(`Number of students in ${field}: ${count}. List: ${names}`);
          }
        }

        // Resolve the promise
        resolve();
      }
    }));
  });
};
