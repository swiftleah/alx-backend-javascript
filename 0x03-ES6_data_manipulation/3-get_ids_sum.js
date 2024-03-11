export default function getStudentIdsSum(StudentList) {
	const Idsum = StudentList.reduce((accumulator, student) => accumulator + student.id, 0);
	return Idsum;
}
