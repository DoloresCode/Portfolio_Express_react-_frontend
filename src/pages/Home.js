import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../Pictures/Dolores_Crazover-profile-picture.png';

function Home() {
  // Array of profiles to rotate through
  const myProfiles = ['Full-Stack Software Engineer', 'Problem Solver', 'Puzzle Lover'];

  //set up first profile
  const [currentProfile, setCurrentProfile] = useState(myProfiles[0]);

  //Effect to to set up the profiles rotation animation
  useEffect(() => {
    const profileInterval = setInterval (() => {
      //update current profile
      setCurrentProfile(previousProfile => {
        const nextIndex = (myProfiles.indexOf(previousProfile) + 1) % myProfiles.length;
        return myProfiles[nextIndex];
      });
    }, 2000);
  
    // Clean up function to clear the interval 
    return () => clearInterval(profileInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means the effect only runs once after the component is first rendered


  return (
    <div className="home-container">
      <div className="home-content">
        <p className="home-greeting">Hi, my name is</p>
        <h1 className="home-name">Dolores Crazover</h1>
        <h3 className="home-subtitle">And I am a <span className="home-role">{currentProfile}</span></h3>
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