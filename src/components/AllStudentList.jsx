import React from "react";

function AllStudentList(props) {
    
  const presentHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("The Student is already present in the present list");
    } else if (student.isPresent === false) {
      alert("The Student is already present in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((item) => {
          if (item.id === student.id) {
            item.isPresent = true;
          }

          return item;
        })
      );
    }
  };

  const absentHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("The Student is already present in the present list");
    } else if (student.isPresent === false) {
      alert("The Student is already present in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((item) => {
          if (item.id === student.id) {
            item.isPresent = false;
          }
          return item;
        })
      );
    }
  };

  const deleteStudentHandler = (id) => {
    props.setStudents(props.students.filter((item) => item.id !== id));
    // const newList = students.filter(item => item.id !== id);
    // setStudents(newList);

    // students = newList
  };
  const editStudentHandler = (id) => {
    const toBeEditedStudent = props.students.find((item) => item.id === id);
    props.setEditMode(true);
    props.setStudentName(toBeEditedStudent.name);
    props.setEditableStudent(toBeEditedStudent);
  };

  return (
    <div class="all-students" style={{ border: "1px solid black" }}>
      <ul>
        {props.students.map((student) => (
          <li>
            <span>{student.name}</span>
            <button onClick={() => editStudentHandler(student.id)}>Edit</button>
            <button onClick={() => deleteStudentHandler(student.id)}>
              Delete
            </button>
            <button onClick={() => presentHandler(student.id)}>Present</button>
            <button onClick={() => absentHandler(student.id)}>Absent</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudentList;
