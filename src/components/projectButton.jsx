import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/projectButton.module.css";

const ProjectButton = ({
  title,
  subtitle,
  description,
  image,
  buttonLabel = "Yes!",
}) => {
  return (
    <div className={`${styles.card} col-lg-6`}>
      <div className={styles.wrapper}>
        <img src={image} alt={title} />
        <div className={styles.info}>
          <h1>{title}</h1>
          <h3 className={`${styles.lightGreen}`}>{subtitle}</h3>
          <p>{description}</p>
          <Link to="/projects/freemedcure">
            <button>{buttonLabel}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectButton;
