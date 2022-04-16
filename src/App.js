import { useState } from "react";

import "./App.css";
import Forms from "./components/Forms";
import StudentSection from "./components/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  /**
   * student = {
   *    id,
   *    name,
   *    isPresent
   * }
   */

  // app -> form

  // app ->   -> studentSection -> allstudent
  return (
    <div className="App">
      <Forms
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        studentName={studentName}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
      />
      <StudentSection
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
      />
    </div>
  );
}

export default App;
