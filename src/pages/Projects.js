import Project from "../Components/project/Project";
import project02 from"./../img/projects/02.jpg"
import project03 from "./../img/projects/03.jpg"


const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
         <Project/>

          {/*<li className="project">
            <img
              src="./img/projects/04.jpg"
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Dating app</h3>
          </li>
          <li className="project">
            <img
              src="./img/projects/05.jpg"
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Landing</h3>
          </li>
          <li className="project">
            <img
              src="./img/projects/06.jpg"
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Gaming community</h3>
  </li>*/}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
