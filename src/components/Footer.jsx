
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/AryanVijay1"
        target="_blank"
        rel="Aryan Vijay"
      >
        <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/aryanvijay2208/"
        target="_blank"
        rel="Aryan Vijay"
      >
        <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
      </a>
    </div>
  );
}
