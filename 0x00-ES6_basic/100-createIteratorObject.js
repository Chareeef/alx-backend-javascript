export default function createIteratorObject(report) {
  const employeesNames = [];

  for (const departement of Object.keys(report.allEmployees)) {
    for (const name of report.allEmployees[departement]) {
      employeesNames.push(name);
    }
  }

  return employeesNames;
}
