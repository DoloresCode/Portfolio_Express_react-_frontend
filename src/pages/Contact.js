import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Let's talk!</h2>
      <form className="contact-form">
        <div className="form-group">
          <div className="name-group">
            <label>
              <span>First Name</span> <span className="required">*</span>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
            </label>
            <label>
              <span>Last Name</span> <span className="required">*</span>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>
            <span>Email</span> <span className="required">*</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
            />
          </label>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="send-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;