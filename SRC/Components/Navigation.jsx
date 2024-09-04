import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from './helpers';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  

  return (

   
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
          <a
            href="#about"

          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            
          >
            Resume
          </a>
        </li>
    </ul>
    </nav>

  );
}

export default Nav;