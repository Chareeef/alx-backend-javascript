// Implement Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Create Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Get to work';
  }
}

// Return either a Teacher or Director based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

// Is `employee` a Director or not
function isDirector(employee : Director | Teacher): boolean {
  return (employee instanceof Director);
}

// Execute `employee`'s work
function executeWork(employee: Director | Teacher): void {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Subject type
type Subject = 'Math' | 'History';

function teachClass(todayClass: Subject): string {
  return (todayClass === 'Math') ? 'Teaching Math' : 'Teaching History';
}

// Test:

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));
// executeWork(createEmployee(200));
// executeWork(createEmployee(1000));
// console.log(teachClass('Math'));
// console.log(teachClass('History'));
