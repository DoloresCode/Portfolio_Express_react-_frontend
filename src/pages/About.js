import { useLoaderData } from "react-router-dom";

function About(props) {
  const about = useLoaderData();
    console.log(about);
  return (
    <div className="about-container">
      <h3 class="title-about-page">So, who am I?</h3>
      <h2 class="name-me-about">{about.name}</h2>
      <p>{about.bio}</p>
      <p>{about.bioSecond}</p>
      <div className="container-aboutbtn-cv-email"> 
        <a href="mailto:dcrazover@gmail.com" className="contact-button">Contact Me</a>
        <a href="Pictures/Dolores_Crazover_Resume.pdf" download className="contact-button-resume">Resume</a>

      </div>
      {about.headshot && (
        <div className="headshot-container">
          <img
            src={about.headshot}
            alt="Headshot Dolores Crazover Full stack software Engineer"
            className="headshot-image"
          />
        </div>
      )}
    </div>
  );
}

export default About;
