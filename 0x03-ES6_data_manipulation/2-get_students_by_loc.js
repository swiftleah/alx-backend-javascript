export default function getSTudentsByLocation(StudentsList, city) {
	const InCity = StudentsList.filter((student) => student.location == city);
	return InCity;
}
