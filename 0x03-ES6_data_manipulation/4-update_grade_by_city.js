// Return an array of students for a specific city with their new grade
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = 'N/A';
      const newStudent = { ...student };

      newGrades.forEach((item) => {
        if (item.studentId === newStudent.id) {
          grade = item.grade;
        }
      });

      newStudent.grade = grade;
      return newStudent;
    });
}
