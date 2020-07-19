import React, { Component } from "react";
import styles from "../styles/home.module.scss";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faNode,
  faReact,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ProgressBar from "../components/progressBar";
import ProjectButton from "../components/projectButton";

class Home extends Component {
  state = {};
  data = {
    projects: [
      {
        title: "Fast Q&A",
        subtitle: "a web-based e-learning platform",
        description:
          "This is my Final Year Project working with my groupmate. Interested? ",
        image: require("../assets/img/projects/fastQ&A/chinese_handwriting_recognition.JPG"),
        link: "/projects/fastqanda",
      },
      {
        title: "FreeMedCure",
        subtitle: "a medical record system",
        description:
          "I have built a system for my friend who is studying chinese medicine. Want to know more?",
        image: require("../assets/img/projects/freemedcure/login_page.png"),
        link: "/projects/freemedcure",
      },
    ],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { projects } = this.data;

    return (
      <>
        <header className={`${styles.header}`}>
          <div className="container">
            <div className={`row align-items-center ${styles.content}`}>
              <div className="bg-heading col-12 col-md-6">
                <h1>Welcome!</h1>
                <p className="lead">
                  I'm Gordon, who is passionate about{" "}
                  <span className={styles.highlight}>web development</span> and
                  love exploring the latest technologies.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.whoAmI}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="left col-md-5">
                <h1 className={`text-center`}>
                  <span className={styles.largeBlueTxt}>Who</span> am I...
                </h1>
              </div>

              <div className="right col-md-7 my-3">
                {/* Self Description */}
                <p>
                  I'm a Hong Konger and university undergraduate major in
                  Computer Science. I have learnt a number of programming
                  languages, namely C++, Java, HTML, CSS and Javascript.
                </p>
                <p>
                  After completing a web programming course, I love it and I
                  have been studying how to create beautiful and functional web
                  applications.
                </p>

                <Link to="/aboutme" className="btn btn-primary btn-sm">
                  more
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skills}>
          <div className="container py-5">
            <div className="row">
              <h1 className="section-heading">Skills</h1>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <img
                  src={require("../assets/img/wordcloud_trans.png")}
                  className={styles.wordCloud}
                />
              </div>
              <div className="col-lg-5">
                <p className={`${styles.greyTxt} my-4 mt-lg-0`}>
                  I've been preparing to be a web developer. However, I do not
                  satisfy with what I have learnt from the university only, but
                  always motivated to learn new technologies and programming
                  skills to improvedf myself.
                </p>

                <div className={styles.icons}>
                  <div className="container">
                    <ProgressBar
                      icon={faHtml5}
                      label="HTML 5"
                      color="bg-success"
                      percent={90}
                    />

                    <ProgressBar
                      icon={faCss3}
                      label="CSS 3"
                      color="bg-info"
                      percent={75}
                    />

                    <ProgressBar
                      icon={faJsSquare}
                      label="JavaScript"
                      color="bg-warning"
                      percent={70}
                    />

                    <ProgressBar
                      icon={faNode}
                      label="Node JS"
                      color="bg-danger"
                      percent={70}
                    />

                    <ProgressBar
                      icon={faReact}
                      label="React JS"
                      color="bg-primary"
                      percent={75}
                    />

                    <ProgressBar
                      icon={faLaravel}
                      label="Laravel"
                      color="bg-secondary"
                      percent={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`parallax ${styles.projects}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <p className={`${styles.description} mt-3`}>
                  Take a look of what I achieved. Actions speak louder than
                  words...
                </p>
              </div>
              <div className="col-md-6 col-12">
                <h1 className={styles.heading}>Projects</h1>
              </div>
            </div>
          </div>

          <div className="container px-4">
            <div className="row pb-5 jusfiy-content-between">
              {projects.map((project, index) => (
                <ProjectButton
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  key={`project-${index}`}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
