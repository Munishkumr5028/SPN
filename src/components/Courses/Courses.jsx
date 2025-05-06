import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";

const courseList = [
  {
    id: 1,
    name: "BCA",
    image: "https://picsum.photos/seed/bca/300/200",
    description: "Learn computer science, software dev & IT fundamentals.",
  },
  {
    id: 2,
    name: "B.Sc. Computer Science",
    image: "https://picsum.photos/seed/bsc/300/200",
    description: "Dive deep into algorithms, networks & programming.",
  },
  {
    id: 3,
    name: "B.A. English",
    image: "https://picsum.photos/seed/baeng/300/200",
    description: "Explore literature, linguistics, and creative writing.",
  },
  {
    id: 4,
    name: "B.Com",
    image: "https://picsum.photos/seed/bcom/300/200",
    description: "Foundations of commerce, accounting & business law.",
  },
  {
    id: 5,
    name: "M.A. History",
    image: "https://picsum.photos/seed/history/300/200",
    description: "In-depth study of Indian and world history.",
  },
  {
    id: 6,
    name: "M.Sc. Chemistry",
    image: "https://picsum.photos/seed/chemistry/300/200",
    description: "Study advanced chemical reactions and research.",
  },
  {
    id: 7,
    name: "BBA",
    image: "https://picsum.photos/seed/bba/300/200",
    description: "Management principles, entrepreneurship & strategy.",
  },
  {
    id: 8,
    name: "MBA",
    image: "https://picsum.photos/seed/mba/300/200",
    description: "Master leadership, marketing, HR & business ops.",
  },
  {
    id: 9,
    name: "MCA",
    image: "https://picsum.photos/seed/mca/300/200",
    description: "Professional degree for software dev & systems.",
  },
  {
    id: 10,
    name: "B.Sc. Agriculture",
    image: "https://picsum.photos/seed/agriculture/300/200",
    description: "Crop science, soil study, and sustainable farming.",
  },
  {
    id: 11,
    name: "B.Ed.",
    image: "https://picsum.photos/seed/bed/300/200",
    description: "Training future teachers with modern pedagogy.",
  },
  {
    id: 12,
    name: "M.Ed.",
    image: "https://picsum.photos/seed/med/300/200",
    description: "Advanced educational practices & research.",
  },
  {
    id: 13,
    name: "B.Sc. Nursing",
    image: "https://picsum.photos/seed/nursing/300/200",
    description: "Clinical care, human anatomy, and patient health.",
  },
  {
    id: 14,
    name: "B.Pharm",
    image: "https://picsum.photos/seed/pharma/300/200",
    description: "Pharmaceutical chemistry and drug development.",
  },
  {
    id: 15,
    name: "M.Sc. Physics",
    image: "https://picsum.photos/seed/physics/300/200",
    description: "Study energy, matter, and quantum mechanics.",
  },
  {
    id: 16,
    name: "B.A. Psychology",
    image: "https://picsum.photos/seed/psychology/300/200",
    description: "Understand human behavior and mental health.",
  },
  {
    id: 17,
    name: "B.Tech. Civil",
    image: "https://picsum.photos/seed/civil/300/200",
    description: "Structures, construction & urban development.",
  },
  {
    id: 18,
    name: "B.Tech. Mechanical",
    image: "https://picsum.photos/seed/mech/300/200",
    description: "Machines, thermodynamics & manufacturing.",
  },
  {
    id: 19,
    name: "B.Tech. Electrical",
    image: "https://picsum.photos/seed/electrical/300/200",
    description: "Circuits, power systems & electronics.",
  },
  {
    id: 20,
    name: "Diploma in Web Dev",
    image: "https://picsum.photos/seed/web/300/200",
    description: "Build modern websites using HTML, CSS, JS & React.",
  },
];

function Courses() {
  return (
    <div className="courses-section">
      <h2 className="courses-heading">Courses Offered</h2>
      <div className="courses-grid">
        {courseList.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.name}
              className="course-image"
            />
            <div className="course-info">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <Link to={`/courses/${course.id}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
