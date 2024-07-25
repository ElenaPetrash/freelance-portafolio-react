import { useParams } from "react-router-dom";

import BtnGithub from "../Components/btnGithub/BtnGitHub";
import img from "../img/projects/project 02.png";

import { projects } from "../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  console.log(project);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <p>{id}</p>

          <img src={img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          <BtnGithub link="http://github.com" />
        </div>
      </div>
    </main>
  );
};

export default Project;
