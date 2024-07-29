import "./style.css";

import inst from "../../img/icons/instagram.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import gitHub from "../../img/icons/gitHub.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/ElenaPetrash">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://linkedin.com/in/elena-petrash-37976826a">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.instagram.com/elenaa_petrash/">
                <img src={inst} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
