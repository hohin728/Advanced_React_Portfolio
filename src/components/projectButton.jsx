import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/projectButton.module.scss";

const ProjectButton = ({
  title,
  subtitle,
  description,
  image,
  link,
  buttonLabel = "Yes!",
}) => {
  return (
    <div className="col-12 col-lg-6">
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <img src={image} alt={title} />
          <div className={styles.content}>
            <h1>{title}</h1>
            <h3 className={`${styles.lightGreen}`}>{subtitle}</h3>
            <p>{description}</p>
            <Link to={link}>
              <button>{buttonLabel}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectButton;
