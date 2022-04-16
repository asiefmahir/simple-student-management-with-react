import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";

function StudentSection(props) {
  const toggleHandler = (id) => {
    const student = props.students.find((item) => item.id === id);

    props.setStudents(
      props.students.map((item) => {
        if (item.id === student.id) {
          item.isPresent = !item.isPresent; // !true // !false
        }
        return item;
      })
    );
  };
  return (
    <div
      class="students-section"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <AllStudentList
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editableStudent={props.editableStudent}
        setEditableStudent={props.setEditableStudent}
        setStudentName={props.setStudentName}
        students={props.students}
        setStudents = {props.setStudents}
      />
      <PresentStudentList
        students={props.students}
        toggleHandler={toggleHandler}
      />
      <AbsentStudentList
        students={props.students}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}

export default StudentSection;
