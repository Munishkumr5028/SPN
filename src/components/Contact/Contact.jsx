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
    <div className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subtext">
        Feel free to contact us for any queries or feedback.
      </p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            required
            onChange={handleInputChange}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            required
            onChange={handleInputChange}
          />

          <div className="phone-group">
            <span className="country-code">+91</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Enter 10-digit phone number"
              maxLength="10"
              pattern="[0-9]{10}"
              required
              onChange={handleInputChange}
            />
          </div>

          <select
            name="inquiryType"
            value={formData.inquiryType}
            required
            onChange={handleInputChange}
          >
            <option value="">Select Inquiry Type</option>
            <option value="general">General</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            rows="5"
            placeholder="Type your message here..."
            required
            onChange={handleInputChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
