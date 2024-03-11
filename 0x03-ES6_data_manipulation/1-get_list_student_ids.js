// Return an array of ids from an array of students objects
export default function getListStudentIds(students) {
  // if `students` is not an array
  if (!Array.isArray(students)) return [];

  // return ids using map
  return students.map((student) => student.id);
}
