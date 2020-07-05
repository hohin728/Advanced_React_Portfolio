import React, { Component } from "react";
import "../styles/home.css";
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
import ProjectsSection from "../components/projectsSection";

class Home extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <header className="bg-background big-parallax">
          <div className="container">
            <div className="row align-items-center">
              <div className="bg-heading col-12 col-md-6">
                <h1>
                  <span className="highlight">Welcome</span> to my web!
                </h1>
                <p className="lead">
                  I'm <span className="highlight">Gordon</span>, who is
                  passionate about web development and exploring the latest
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div id="whoAmI">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="left col-md-5">
                <h1 className={`text-center`}>
                  <span className="blue-lg-txt">Who</span> am I...
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
        </div>

        <div id="skills-div">
          <div className="container py-5">
            <div className="row">
              <h1 className="section-heading">Skills</h1>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <img
                  src={require("../assets/img/wordcloud_trans.png")}
                  className="wordCloud"
                />
              </div>
              <div className="col-lg-5">
                <p className="txt-grey">
                  I've been preparing to be a web developer. However, I do not
                  satisfy with what I have learnt from the university only, but
                  always motivated to learn new technologies and programming
                  skills to improvedf myself.
                </p>

                <div className="icons">
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
        </div>

        <div id="projects-div" className="parallax">
          <div className="container pt-5">
            <div className="row">
              <p className="description col-md-6 col-12">
                Take a look of what I achieved. Actions speak louder than
                words...
              </p>
              <h1 className="col-md-6 col-12 heading">Projects</h1>
            </div>
          </div>
          <ProjectsSection />
        </div>
      </>
    );
  }
}

export default Home;
