export default function getListStudentsIds(studentsArray) {
	if (!Array.isArray(studentsArray)) {
		return [];
	}
	const studentIds = studentsArray.map(student => student.id);
        return studentIds;
}
