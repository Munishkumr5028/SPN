import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import "./AddCourse.css";

function AddCourse() {
  const [courses, setCourses] = useState([{ id: 1, name: "MCA" }]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    objectives: "",
    duration: "",
    fees: ["", "", "", "", "", ""],
  });

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    if (name === "fees") {
      const updatedFees = [...formData.fees];
      updatedFees[i] = value;
      setFormData({ ...formData, fees: updatedFees });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addCourse = () => {
    const newCourse = {
      id: courses.length + 1,
      name: formData.title,
      ...formData,
    };
    setCourses([...courses, newCourse]);
    setFormData({
      title: "",
      objectives: "",
      duration: "",
      fees: ["", "", "", "", "", ""],
    });
    setShowModal(false);
  };

  const editCourse = (index) => {
    const currentName = courses[index].name;
    const newName = prompt("Edit course name:", currentName);
    if (newName) {
      const updatedCourses = [...courses];
      updatedCourses[index].name = newName;
      setCourses(updatedCourses);
    }
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <DashboardLayout>
      <div className="add-course">
        <div className="header">
          <h2>Course</h2>
          <button onClick={() => setShowModal(true)}>Add</button>
        </div>

        <table id="courseTable">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => editCourse(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteCourse(index)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Add New Course</h3>
              <label>
                Title:{" "}
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Objectives:{" "}
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Programme Duration:{" "}
                <input
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </label>
              <label>Fees Structure (6 Semesters):</label>
              {formData.fees.map((fee, i) => (
                <input
                  key={i}
                  name="fees"
                  type="number"
                  placeholder={`Semester ${i + 1}`}
                  value={fee}
                  onChange={(e) => handleInputChange(e, i)}
                />
              ))}
              <div className="modal-actions">
                <button onClick={addCourse}>Save</button>
                <button
                  className="delete-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default AddCourse;
