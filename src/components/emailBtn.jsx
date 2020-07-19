import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button } from "../styles/ContactBtn.module.scss";

const EmailBtn = ({ size = "2x" }) => {
  return (
    <a href="mailto:hohin.tang@gmail.com" className={button}>
      <FontAwesomeIcon icon={faEnvelope} size={size} />
    </a>
  );
};

export default EmailBtn;
