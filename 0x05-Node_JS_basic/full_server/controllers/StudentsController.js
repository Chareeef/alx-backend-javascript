#!/usr/bin/node
import readDatabase from '../utils';

// StudentsController class
export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2]).then((studentsByFields) => {
      // Build the response
      let response = 'This is the list of our students';

      // Count students by fields
      const fields = Object.keys(studentsByFields).sort();
      fields.forEach((field) => {
        const studentsCount = studentsByFields[field].length;
        const firstNames = studentsByFields[field].join(', ');

        response += `\nNumber of students in ${field}: ${studentsCount}. List: ${firstNames}`;
      });

      // Send response
      res.send(response);
    })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    // Retrieve major
    const { major } = req.params;

    if (!(['CS', 'SWE'].includes(major))) {
      res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2]).then((studentsByFields) => {
      // Send major's students first names
      res.send(`List: ${studentsByFields[major].join(', ')}`);
    })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
