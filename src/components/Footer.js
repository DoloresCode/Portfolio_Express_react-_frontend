import '../index.css';

function Footer(props) {
    return (
        <footer>
          <div className="footer-container">
            <p>Copyright © {new Date().getFullYear()} Dolores Crazover SWE Portfolio. All rights reserved.</p>
          </div>
        </footer>
      );
    }
  
  export default Footer;