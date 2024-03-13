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

// Rendering table
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Create headers
const headers = ['firstName', 'location'];
const headerRow = document.createElement('tr');
headers.forEach((header) => {
  const th = document.createElement('th');
  th.textContent = header;
  headerRow.appendChild(th)
});
thead.appendChild(headerRow);
table.appendChild(thead)

// Create Rows
studentsList.forEach((student) => {
  const tr = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  tr.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  tr.appendChild(locationCell);

  tbody.appendChild(tr);
});

table.appendChild(tbody);

// Display the table
document.body.appendChild(table)
