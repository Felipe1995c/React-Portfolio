import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Felipe©</h2>
      <p>
        <ul>
          <a href="https://github.com/felipe1995c">
            <li className="logo">
              < add component for github/>
            </li>
          </a>
          <a href="placeholder">
            <li className="logo">
              < add linkedIn logo />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;