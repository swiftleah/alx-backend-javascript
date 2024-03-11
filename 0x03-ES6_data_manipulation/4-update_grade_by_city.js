export default function updateStudentGradeByCity(StudentList, city, newGrades) {
	const updatedStudents = StudentList
	.filter((student) => student.location === city)
	.map((student) => {
		const gradematch = newGrades.find((grade) => grade.studentId === student.id);
		return {
			...student,
			grade: gradematch ? gradematch.grade : 'N/A',
		};
	});
	return updatedStudents;
}
