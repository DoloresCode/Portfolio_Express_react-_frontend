import React from 'react';
import profilePicture from '../Pictures/Dolores_Crazover_Contact_Page.png';
import emailIcon from '../Pictures/email_icon.png';
import githubIcon from '../Pictures/github_icon.png';
import linkedinIcon from '../Pictures/linkedin_icon.png';

function Contact() {
  return (
    <div className="contact-page-container">
      <h1 className="contact-page-title">Contact Information</h1>
      <h2 className="contact-page-subtitle">Let's talk!</h2>
      <div className="contact-grid">
        <div className="profile-image-contact-page">
          <img src={profilePicture} alt="Dolores Crazover in front of her code" />
        </div>
        <div className="contact-page-details">
          <p>
            <img src={emailIcon} alt="Email Icon" />
            <strong className="red-text">Email: </strong> 
            <a href="mailto:dcrazover@gmail.com">dcrazover@gmail.com</a>
          </p>
          <p>
            <img src={linkedinIcon} alt="LinkedIn Icon" />
            <strong className="red-text">LinkedIn: </strong>
            <a href="https://www.linkedin.com/in/dolores-crazover/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/dolores-crazover/
            </a>
          </p>
          <p>
            <img src={githubIcon} alt="GitHub Icon" />
            <strong className="red-text">GitHub: </strong> 
            <a href="https://github.com/DoloresCode" target="_blank" rel="noopener noreferrer">
              https://github.com/DoloresCode
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
