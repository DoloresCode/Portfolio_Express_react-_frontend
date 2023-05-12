import React from 'react';
import profilePicture from '../logo/Dolores_Crazover-profile-picture.png';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <p className="home-greeting">Hi, my name is</p>
        <h1 className="home-name">Dolores Crazover</h1>
        <h3 className="home-subtitle">And I am a <span className="home-role">Full-Stack Software Engineer</span></h3>
        <h3 className="home-description">I love learning new things, embracing challenges, working in teams, and building impactful solutions that improve lives and shape the world.</h3>
        <div className="home-buttons">
          <button className="home-button">Contact</button>
          <button className="home-button">Portfolio</button>
        </div>
      </div>
      <div className="home-image-container">
        <img className="home-image" src={profilePicture} alt="Profile" />
      </div>
    </div>
  );
}

export default Home;