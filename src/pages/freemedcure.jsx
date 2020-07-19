import React, { Component } from "react";
import styles from "../styles/freemedcure.module.scss";
import CurvedHeader from "../components/curedHeader";
import {
  faLaravel,
  faJsSquare,
  faPhp,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import TechIcon from "../components/techIcon";

class FreeMedCure extends Component {
  video = require("../assets/videos/FreeMedCure_Demo.mp4");
  data = {
    title: "FreeMedCure",
    subtitle:
      "I have built a web-based data-entry system for my friend who is studying chinese medicine. It helps doctors to keep a consistent records of patients' conditions and distributed prescription. ",
    techIcons: [
      { title: "Laravel", icon: faLaravel },
      { title: "PHP", icon: faPhp },
      { title: "Bootstrap", icon: faBootstrap },
      { title: "jQuery", icon: faJsSquare },
      { title: "MySQL", icon: faDatabase },
    ],
    examples: [
      {
        title: "Customized Login Page",
        description:
          "I used to rely on bootstrap libraries for styling. Upon completion of this project, I try to style the web application with my own styles.",
        image: require("../assets/img/projects/freemedcure/login_page.png"),
      },
      {
        title: "Add Patient",
        description: "I designed a form for doctors to input patient's data.",
        image: require("../assets/img/projects/freemedcure/patient_add.png"),
      },
      {
        title: "List Patient",
        description:
          "Doctor can operate on patients, like viewing profile or adding a new case. Patients, which are generated by dummy data in this example, are shown in a table with pagination.",
        image: require("../assets/img/projects/freemedcure/patient_list.png"),
      },
      {
        title: "Adding Record / Follow Up",
        description:
          "Doctor add data on this page. As requested by my friend, there is a column on the left which shows the past record for reference.",
        image: require("../assets/img/projects/freemedcure/record_followup.png"),
      },
    ],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { title, subtitle, techIcons, examples } = this.data;
    return (
      <>
        <CurvedHeader title={title} subtitle={subtitle} />
        <div className={styles.wrapper}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <h3>Implementation</h3>
                <p className="mt-3">
                  This application is developed with Laravel, which is an open
                  source framework for PHP. I stored the data with MySQL
                  database and I manage it through phpMyAdmin. I have used some
                  libraries like bootstrap and jQuery as well.
                </p>
              </div>
            </div>
            <div className="card-deck mt-4 text-center mb-5">
              {techIcons.map((techItem, index) => (
                <TechIcon item={techItem} key={`techItem-${index}`} />
              ))}
            </div>
          </div>

          <div className={styles.hightlight}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3 className={`mt-5 ${styles.highlight}`}>
                    Highlight Features
                  </h3>
                </div>
              </div>
              <p className={styles.description}>
                My friend has asked me to build some feature that makes the
                input process faster. I have designed the following features to
                make the system more user-friendly and make the process more
                convenient.
              </p>

              <div className="row my-3 justify-content-center">
                <div className="col-md-6 mb-5 col-12">
                  <h3 className={`${styles.feature1} ${styles.feature}`}>
                    <span className={styles.yellowTxt}>
                      Automatic Increment
                    </span>{" "}
                    of Input Rows
                  </h3>
                </div>
                <div className="col-md-6 col-12">
                  <h3 className={`${styles.feature2} ${styles.feature}`}>
                    <span className={styles.yellowTxt}>Auto completion</span> of
                    Text Field
                  </h3>
                </div>
              </div>
            </div>
            <video muted controls loop>
              <source src={this.video} type="video/mp4" />
              Your browser does not support the video tag
            </video>
          </div>

          <div className={styles.gallery}>
            {examples.map((item, index) => (
              <div
                className="d-flex flex-column flex-md-row"
                key={`example-${index}`}
              >
                <div
                  className={
                    index % 2 === 0
                      ? styles.description
                      : `${styles.description} order-md-1`
                  }
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.reflection}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1>Reflection</h1>
                  <p>
                    First of all, thank you for browsing my web and knowing
                    about me. This project may look easy at your first glaze
                    that it is an online system for inputting data. However,
                    this is quite tricky when I implement it because I have
                    encountered quite a number of problems, from front-end
                    styling to php backend script. I’m so glad that I finally
                    finished a web application that is useful for other people.
                  </p>

                  <p>
                    It is really satisfying to finish this application, but this
                    does not mean it is the end. I will keep improving my
                    programming skills and develope more useful and nice-looking
                    web applications!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FreeMedCure;
