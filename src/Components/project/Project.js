import "./styles.css";
import { projects } from "../../helpers/projectsList";

const Project = ({ tittle, img }) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={img} alt={tittle} className="project__img" />
        {console.log({ projects })}
        <h3 className="project__title">{tittle}</h3>
      </a>
    </li>
  );
};

export default Project;
