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

// Implement Student Class through interfaces
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test Teacher:

// const teacher: Teacher = {
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London',
//   contract: false,
// };
// 
// teacher.id = 1;
// 
// console.log(teacher);
// console.log(printTeacher(teacher.firstName, teacher.lastName));

// Test Directors:

// const director: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
//
// console.log(director);

// Test Student:

// const student = new Student('Youssef Charif', 'Hamidi');
// console.log(student.workOnHomework());
// console.log(student.displayName());
