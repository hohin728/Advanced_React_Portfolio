import React from "react";
import styles from "../styles/techIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechIcon = ({ item }) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className={`card-body ${styles.cardBody}`}>
        <FontAwesomeIcon icon={item.icon} size="5x" />
        <h5 className="card-title mt-2">{item.title}</h5>
      </div>
    </div>
  );
};

export default TechIcon;
