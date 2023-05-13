import { useLoaderData } from "react-router-dom";

function About(props) {
  const about = useLoaderData();

  return (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
      {about.headshotUrl && (
        <img src={about.headshotUrl} alt="Headshot Dolores Crazover Full 
        stack software Engineer" />
      )}
    </div>
  );
}

export default About;