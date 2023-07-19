import { useLoaderData } from "react-router-dom";

function Projects(props) {
  const projects = useLoaderData();
  console.log(projects);

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.name} className="project-card">
          <div className="image-container">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="project-content">
            <h1 className="project-title">{project.name}</h1>
            <div className="buttons-container">
              <a href={project.live} className="live-site-button">Live Site</a>
              {project.git && <a href={project.git} className="github-button">Github</a>}
              {project.gitFrontend && <a href={project.gitFrontend} className="github-button">Github Frontend</a>}
              {project.gitBackend && <a href={project.gitBackend} className="github-button">Github Backend</a>}
            </div>
            <p className="project-text">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
