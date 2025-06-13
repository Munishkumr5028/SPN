import React from "react";
import "./about.css";

function Principalmessage() {
  return (
    <section className="principal-section" id="principal-message">
      <div className="principal-container">
        <div className="principal-image-name">
          <div className="principal-image">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="Principal"
            />
          </div>
          <div className="principal-signature">
            <p className="signature-name">Dr. John Smith</p>
            <p className="signature-title">Principal</p>
          </div>
        </div>
        <div className="principal-content">
          <h2>Principal's Message</h2>
          <p>
            Welcome to our esteemed institution, where we strive to nurture
            young minds with knowledge, values, and skills to excel in a dynamic
            world. Our commitment is to provide an environment that encourages
            intellectual growth, critical thinking, and ethical leadership.
            Together, we aim to shape a brighter future for our students and
            society.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Principalmessage;
