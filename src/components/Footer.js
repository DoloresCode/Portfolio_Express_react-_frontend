import '../index.css';
import '../index.css';

function Footer(props) {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-section">
          <h2>Want to know more about me, my code, and collaborate?</h2>
          <div className="contact-links">
            <a href="https://github.com/DoloresCode" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dolores-crazover/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="Pictures/Dolores_Crazover_Resume_1223.pdf" download>Resume</a>
            <a href="mailto:dcrazover@gmail.com">Email</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="copyright">
            <p>Copyright © {new Date().getFullYear()} Dolores Crazover SWE Portfolio. All rights reserved.</p>
            </div>
      </div>
    </footer>
  );
}

export default Footer;