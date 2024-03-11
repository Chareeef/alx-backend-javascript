// Filter students who are located in a specific location
export default function getStudentsByLocation(students, location) {
  // if `students` is not an array
  if (!Array.isArray(students)) return [];

  // return matching students
  return students.filter((student) => student.location === location);
}
