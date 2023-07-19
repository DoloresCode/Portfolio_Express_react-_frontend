import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../Pictures/Dolores_Crazover-profile-picture.png';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <p className="home-greeting">Hi, my name is</p>
        <h1 className="home-name">Dolores Crazover</h1>
        <h3 className="home-subtitle">And I am a <span className="home-role">Full-Stack Software Engineer</span></h3>
        <h3 className="home-description">I love learning new things, embracing challenges, working in teams, and building impactful solutions that improve lives and shape the world.</h3>
        <div className="home-buttons">
          <Link to="/contact" className="home-button">Contact</Link>
          <Link to="/projects" className="home-button">Projects</Link>
        </div>
      </div>
      <div className="home-image-container">
        <img className="home-image" src={profilePicture} alt="Profile" />
      </div>
    </div>
  );
}

export default Home;