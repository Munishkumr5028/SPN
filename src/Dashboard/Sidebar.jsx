import React, { useState } from "react";
import './Dashboard.css'


import {
  FaTachometerAlt,
  FaUserGraduate,
  FaBookOpen,
  FaChalkboardTeacher,
  FaNewspaper,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function Sidebar() {
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <div className="sidebar">
      <h2>College Admin </h2>
      <ul>
        <li>
          <FaTachometerAlt className="sidebar-icon" />
          Dashboard
        </li>

        <li onClick={() => toggleSection("students")}>
          <FaUserGraduate className="sidebar-icon" />
          Students <FaChevronDown className="chevron" />
        </li>
        {openSection === "students" && (
          <ul className="submenu">
            <li>All Students</li>
          </ul>
        )}

        <li onClick={() => toggleSection("courses")}>
          <FaBookOpen className="sidebar-icon" />
          Courses <FaChevronDown className="chevron" />
        </li>
        {openSection === "courses" && (
          <ul className="submenu">
            <li>Course List</li>
            <li>Add Course</li>
          </ul>
        )}

        <li onClick={() => toggleSection("faculty")}>
          <FaChalkboardTeacher className="sidebar-icon" />
          Faculty <FaChevronDown className="chevron" />
        </li>
        {openSection === "faculty" && (
          <ul className="submenu">
            <li>All Faculty</li>
            <li>Assign Courses</li>
          </ul>
        )}

        <li>
          <FaNewspaper className="sidebar-icon" />
          News
        </li>

        <li>
          <FaCalendarAlt className="sidebar-icon" />
          Events
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
