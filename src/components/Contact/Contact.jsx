import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert with form data (you can customize this message)
    alert("Form submitted successfully!");

    // Clear form data
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-page">
        <form id="contactForm">
          <h2>Contact Us</h2>

          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label for="phone">Phone Number</label>
          <div className="phone-group">
            <span className="country-code">+91</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxlength="10"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit phone number"
              required
            />
          </div>

          <label for="inquiry">Inquiry Type</label>
          {/* <!-- Custom Dropdown Start --> */}
          <div className="custom-select">
            <div className="selected">Select Inquiry Type</div>
            <div className="options">
              <div data-value="general">General</div>
              <div data-value="support">Support</div>
              <div data-value="feedback">Feedback</div>
              <div data-value="other">Other</div>
            </div>
          </div>
          <input type="hidden" name="inquiry" id="inquiry-hidden" required />
          {/* <!-- Custom Dropdown End --> */}

          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Type your message here..."
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        <div id="responseMessage" className="hidden"></div>
        {/* <!-- Contact Info (Right) --> */}
        <div className="info-container">
          <h3>Postal Address:</h3>
          <p>
            For Enquiry
            <br />
            Punjab University,
            <br />
            Mukerian - G.T. Road,
            <br />
            Hosiharpur, Punjab (India), 144522
          </p>

          <h3>For General/ Admission Related Enquiry:</h3>
          <p>
            <strong>Phone:</strong> +91-1824-521360 (General Enquiry)
          </p>
          <p>
            <strong>Phone:</strong> +91-1824-521350 (Admission Enquiry)
          </p>
          <p>
            <strong>Toll Free:</strong> 1800 3001 1800
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
