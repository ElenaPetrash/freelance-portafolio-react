import iconGithub from "./gitHub-black.svg"
import "./styles.css"


const BtnGithub = ({link}) => {
    return (
        <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
        <img src={iconGithub} alt=""/>
        GitHub repo
    </a>
      );
}
 
export default BtnGithub;