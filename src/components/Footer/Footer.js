import "./Footer.css";
import GitHubIcon from "../../images/github-image.svg";
import FacebookIcon from "../../images/Facebook-image.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">
        {currentYear} © Sergio A Mendoza, Powered by News Api
      </p>

      <div className="footer__links">
        <div className="footer__links-A">
          <NavLink to="/">
            <button className="footer__button-home" type="button">
              Home
            </button>
          </NavLink>
          <a
            href="https://tripleten.com/"
            target="_blank"
            className="footer__button-tripleten"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__links-B">
          <a
            href="https://github.com/MrSurge87"
            target="_blank"
            className="footer__button-github"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.facebook.com/sergio.a.mendoza.54/"
            target="_blank"
            className="footer__button-facebook"
          >
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
