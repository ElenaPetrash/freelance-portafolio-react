import "./styles.css"
import { projects } from "../../helpers/projectsList";
import project01 from "../../img/projects/project01.png"


const Project = (props) => {
    return ( 
        <li className="project">
        <a href="./project-page.html">
          <img
            src={project01}
            alt="Project img"
            className="project__img"
          />
          {console.log({projects})}
          <h3 className="project__title">{props.tittle}</h3>
        </a>
      </li>
     );
}
 
export default Project;