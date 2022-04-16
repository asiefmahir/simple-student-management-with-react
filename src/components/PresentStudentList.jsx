import React from "react";

function PresentStudentList(props) {
  return (
    <div class="present-students" style={{ border: "1px solid green" }}>
      <ul>
        {props.students
          .filter((item) => item.isPresent === true)
          .map((student) => (
            <li>
              <span>{student.name}</span>
              <button onClick={() => props.toggleHandler(student.id)}>
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PresentStudentList;
