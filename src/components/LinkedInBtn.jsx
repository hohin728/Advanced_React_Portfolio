import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button } from "../styles/ContactBtn.module.css";

const LinkedInBtn = ({ size = "2x" }) => {
  return (
    <a
      href="https://www.linkedin.com/in/ho-hin-tang-46000413b/"
      target="_blank"
      rel="noopener noreferrer"
      className={button}
    >
      <FontAwesomeIcon icon={faLinkedin} size={size} />
    </a>
  );
};

export default LinkedInBtn;