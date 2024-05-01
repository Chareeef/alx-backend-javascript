import { readFile } from 'fs';

// Read database asycnchronously
function readDatabase(path) {
  // Return a promise
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', ((err, data) => {
      // Reject if an error occured
      if (err) {
        reject(err);
      } else { // Recieved data
        const lines = data.split('\n').filter((line) => line !== '').slice(1);
        const students = lines.map((line) => line.split(','));

        // Group students by fields
        const studentsByFields = {};

        students.forEach((item) => {
          const firstName = item[0];
          const field = item[3];

          if (!studentsByFields[field]) {
            studentsByFields[field] = [firstName];
          } else {
            studentsByFields[field].push(firstName);
          }
        });

        // Resolve studentsByFields
        resolve(studentsByFields);
      }
    }));
  });
}

export default readDatabase;
