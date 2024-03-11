// Return the sum of all the student ids
export default function getStudentIdsSum(students) {
  // if `students` is not an array
  if (!Array.isArray(students)) return 0;

  // return ids sum using reduce
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
