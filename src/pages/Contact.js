import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me Now!</h2>
      <form className="contact-form">
        <div className="form-group">
          <label>
            <span>First Name*</span> <span className="required">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <span>Last Name</span> <span className="required">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <span>Email</span> <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter the subject"
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button className="send-button">Send</button>
      </form>
    </div>
  );
}

export default Contact;