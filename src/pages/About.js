import { useLoaderData } from "react-router-dom";

function About(props) {
  const about = useLoaderData();
    console.log(about);
  return (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
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