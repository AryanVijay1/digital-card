import React from "react";
import image from "../images/AryanVijay.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info(){
    return(
        <div className="info">
            <img className="info--photo" src={image} alt="Aryan Vijay" />
            <h1 className="info--fullname">Aryan Vijay</h1>
      <h5 className="info--role">Front End Developer</h5>
      <p className="info--website">
      <a
          className="info--websiteLink"
          href=""
          target="_blank"
          rel="Aryan's portfolio"
        >Aryan Vijay's Portfolio</a>
        </p>
        <div className="info--buttons">
        <address>
          <a href="mailto:0aryanvijay1@gmail.com">
            {" "}
            <button className="button button--email">
            <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/aryanvijay2208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
        </div>
    )
}
export default Info