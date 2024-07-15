
import "./style.css"
import foto from "../../img/fotoPortfolio.jpg"


const Header = () => {
    return ( <header className="header">
    <div className="header__wrapper">
      <h1 className="header__title">
        <strong>
          Hi, my name is <em>Elena</em>
        </strong>
        <br />a full stack web developer
      </h1>
      <div className="header__text">
        <p>with passion for learning and creating.</p>
      </div>

      <div>
        <img src={foto} alt="" className="myFoto" />
      </div>
      <div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </div>
  </header>
);
}

export default Header;