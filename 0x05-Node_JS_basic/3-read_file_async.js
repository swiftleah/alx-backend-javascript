const fs = require('fs').promises;

async function countStudents(filepath) {
	try {
		const data = await fs.readFile(filepath, 'utf8');
		const lines = data.trim().split('\n');

		if (lines.length < 2) {
			throw new Error("Cannot load the database");
		}

		const headers = lines.shift().split(',');
		const firstNameIndex = headers.indexOf("firstname");
		const fieldIndex = headers.indexOf("field");

		if (firstNameIndex === -1 || fieldIndex === -1) {
			throw new Error("Cannot load the database");
		}

		const fieldCounts = {};
		lines.forEach((line) => {
			const studentData = line.split(',');
			if (studentData.length !== headers.length) {
				return;
			}

			const firstName = studentData[firstNameIndex].trim();
			const field = studentData[fieldIndex].trim();

			if (!firstName || !field) {
				return;
			}

			if (!(field in fieldCounts)) {
				fieldCounts[field] = {
					count: 0,
					names: []
				};
			}

			fieldCounts[field].count += 1;
			fieldCounts[field].names.push(firstName);
		});

		const totalStudents = Object.values(fieldCounts).reduce((sum, info) => sum + info.count, 0);
		console.log(`Number of students: ${totalStudents}`);

		for (const [field, info] of Object.entries(fieldCounts)) {
			const namesList = info.names.join(", ");
			console.log(`Number of students in ${field}: ${info.count}. List: ${namesList}`);
		}
	} catch (error) {
		throw new Error("Cannot load the database");
	}
}

module.exports = countStudents;
