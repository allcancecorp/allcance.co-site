// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import logo from "../assets/images/logo.png";

// Icons
import {
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// ---------------

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-logo">
          <img src={logo} alt="Allcance" />
        </div>
        <div className="footer-mail">
          <a href="mailto:falecom@allcance.co">falecom@allcance.co</a>
        </div>
        <div className="footer-phone">
          <a href="https://wa.me/5571992905843">71 99290-5843</a>
        </div>
        <div className="social-holder">
          <a href="https://www.instagram.com/allcance.educacao/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="copyright-holder">
          © {new Date().getFullYear()} Allcance Educação Corporativa{" "}
          {/* <a href="#">| 24.773.601/0001-03</a> */}
          <p>24.773.601/0001-03 | Instituto Autogenesis</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
