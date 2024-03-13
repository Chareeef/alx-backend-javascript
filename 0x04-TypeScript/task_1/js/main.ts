// Implement Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

// Implement Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Print Teacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
  (firstName, lastName) => `${firstName[0]}. ${lastName}`
);

// Test:

const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

teacher.id = 1;

console.log(teacher);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher(teacher.firstName, teacher.lastName));
