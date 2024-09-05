import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <h2>Made by Felipe©</h2>
      <p>
        <ul>
          <a href="https://github.com/felipe1995c">
            <li className="logo">
            <FontAwesomeIcon icon={faGithub} /> 
            </li>
          </a>
          <a href="placeholder">
            <li className="logo">
            <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;