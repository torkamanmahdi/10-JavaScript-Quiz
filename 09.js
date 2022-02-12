const getStudentsWithNamesAndAvgNote = (students) => {
	return students.map( student => student = {
		name: student.name,
		avgNote: student.notes.length === 0 ? 0 : student.notes.reduce( ( (a,b) => a+b ), 0 ) / student.notes.length
	} )
}