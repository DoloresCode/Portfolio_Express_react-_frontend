import { Link } from "react-router-dom"
import logo from "../logo/Logo_Dolores_Crazover_w.png"

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">
              <div>HOME</div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <div>ABOUT</div>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <div>PROJECTS</div>
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <div>SKILLS</div>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <div>CONTACT</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
