import React from "react";
import { Link } from "react-router-dom"; // For navigation

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/Resume">Resume(coming soon)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;