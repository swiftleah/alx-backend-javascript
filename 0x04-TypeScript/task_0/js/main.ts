interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
    firstName: "John",
    lastName: "Smith",
    age: 26,
    location: "New York"
};

const Student2: Student = {
    firstName: "Jesiah",
    lastName: "Crow",
    age: 15,
    location: "Los Angeles"
};

const studentsList: Student[] = [Student1, Student2];

const renderTable = (students: Student[]) => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    students.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
};

renderTable(studentsList);
