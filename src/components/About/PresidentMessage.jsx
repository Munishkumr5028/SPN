import React from "react";
import "./About.css";

function Presidentmessage() {
  return (
    <section className="president-section" id="president-message">
      <div className="president-container">
        <div className="president-image-name">
          <div className="president-image">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="President"
            />
          </div>
          <div className="president-signature">
            <p className="signature-name">Dr. Jane Doe</p>
            <p className="signature-title">President</p>
          </div>
        </div>
        <div className="president-content">
          <h2>President's Message</h2>
          <p>
            Greetings from our institution, a beacon of learning and innovation.
            Our vision is to empower students to lead with integrity and
            contribute meaningfully to society. We are dedicated to fostering an
            inclusive environment that inspires excellence and global
            citizenship.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Presidentmessage;
