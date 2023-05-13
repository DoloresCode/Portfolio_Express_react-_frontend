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
          <a href={project.git} className="button-link">
            <button>Github</button>
          </a>
          <a href={project.live} className="button-link">
            <button>Live Site</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
