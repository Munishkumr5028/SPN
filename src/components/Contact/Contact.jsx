import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="contact-heading">Get in Touch With Us</h2>
      <p className="contact-subtext">Feel free to contact us for any queries or feedback.</p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
