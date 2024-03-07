// `HolbertonCourse` class implementation
export default class HolbertonCourse {
  constructor(name, length, students) {
    // name validation
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    // length validation
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    // students validation
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array of strings');
    } else {
      students.forEach((name) => {
        if (typeof name !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      });

      this._students = students;
    }
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  // length getter
  get length() {
    return this._length;
  }

  // length setter
  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = value;
    }
  }

  // students getter
  get students() {
    return this._students;
  }

  // students setter
  set students(studentsList) {
    if (!Array.isArray(studentsList)) {
      throw TypeError('Students must be an array of strings');
    } else {
      studentsList.forEach((name) => {
        if (typeof name !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      });

      this._students = studentsList;
    }
  }
}
