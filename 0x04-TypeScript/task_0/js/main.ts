// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create Two students
const youssef: Student = {
  firstName: 'Youssef Charif',
  lastName: 'Hamidi',
  age: 21,
  location: 'Morocco'
};

const ken: Student = {
  firstName: 'Kenansa Meseret',
  lastName: 'Nigusie',
  age: 21,
  location: 'Ethiopia'
};

// Create studentsList array
const studentsList: Student[] = [youssef, ken];

// Create rendering table
const studentsTable: [string, string][] = [];

studentsList.forEach((student) => {
  studentsTable.push([student.firstName, student.location])
});

// Display the table
console.log(studentsTable);
