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
          <p>{project.description}</p>
          <div className="buttons-container">
            <a href={project.live} className="button-link">
              <button className="live-site-button">Live Site</button>
            </a>
            {project.git && (
              <a href={project.git} className="button-link">
                <button className="github-button">Github</button>
              </a>
            )}
            {project.gitFrontend && (
              <a href={project.gitFrontend} className="button-link">
                <button className="github-button">Github Frontend</button>
              </a>
            )}
            {project.gitBackend && (
              <a href={project.gitBackend} className="button-link">
                <button className="github-button">Github Backend</button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
