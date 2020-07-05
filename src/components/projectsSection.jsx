import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/projectSection.module.css";

const ProjectsSection = () => {
  return (
    <div className={styles.bg}>
      <div className="container">
        <div className="row py-5">
          {/* Project Button */}
          <div className={`${styles.card} col-12 col-lg-6`}>
            <div className={styles.wrapper}>
              <img
                src={require("../assets/img/projects/freemedcure/login_page.png")}
                alt="Login"
              />
              <div className={styles.info}>
                <h1>FreeMedCure</h1>
                <h3 className="text-muted">a medical record system</h3>
                <p>
                  I have built a system for my friend who is studying chinese
                  medicine. Want to know more?
                </p>
                <Link to="/projects/freemedcure">
                  <button>Yes!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
