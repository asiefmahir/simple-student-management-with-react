
function Forms (props) {

  const createStudentHandler = () => {
    if (props.studentName) {
      const newStudent = {
        id: Date.now(),
        name: props.studentName
      }

      props.setStudents([...props.students, newStudent]);
      props.setStudentName("")
    } else {
      alert("Please enter a valid name")
    }
  }

 

  const updateStudentHandler = () => {
    props.setStudents(props.students.map((student) => {
      if(student.id === props.editableStudent.id) {
        student.name = props.studentName;
      }
      return student;
    }))
    props.setEditMode(false);
    props.setStudentName("");
    props.setEditableStudent(null);
  }

  return (
    <form style = {{display: "flex", justifyContent: "center", alignItems: "center"}} onSubmit = {(e) => {
        e.preventDefault();
        props.editMode ? updateStudentHandler() : createStudentHandler()
      }}>
        <input 
          type="text" 
          value={props.studentName} 
          onChange={(event) => props.setStudentName(event.target.value)} 
          placeholder = "Enter a valid name"
        />
        <button>
          {props.editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
  )
}

export default Forms