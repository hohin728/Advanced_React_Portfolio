import React from "react";
import styles from "../styles/footer.module.css";
import LinkedInBtn from "./LinkedInBtn";
import EmailBtn from "./emailBtn";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <h1 className="py-4">Contact Me</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <LinkedInBtn size="4x" />
            <EmailBtn size="4x" />
          </div>
          <div className="col-md-8">
            <h2>TANG Ho Hin, Gordon</h2>
            <h5>
              <small>LinkedIn: </small>
              <a
                href="https://www.linkedin.com/in/tang-ho-hin-gordon/"
                className={styles.link}
              >
                https://www.linkedin.com/in/tang-ho-hin-gordon/
              </a>
            </h5>
            <h5>
              <small>Email: </small>
              <a href="mailto:hohin.tang@gmail.com" className={styles.link}>
                hohin.tang@gmail.com
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
