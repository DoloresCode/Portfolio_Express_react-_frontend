import { useLoaderData } from "react-router-dom";

function Projects(props) {
  const projects = useLoaderData();
  console.log(projects);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h1>{project.name}</h1>
          <div className="image-container">
            <img src={project.image} alt={project.title || ""} />
          </div>
          <div className="buttons-container">
            <a href={project.git} className="button-link">
              <button className="github-button">Github</button>
            </a>
            <a href={project.live} className="button-link">
              <button className="live-site-button">Live Site</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
