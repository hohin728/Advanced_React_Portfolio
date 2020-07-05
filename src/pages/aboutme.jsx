import React, { Component } from "react";
import "../styles/aboutme.css";
import { Link } from "react-router-dom";

class AboutMe extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="background">
        <div id="aboutme-wrapper" className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <img
                src={require("../assets/img/profile.JPG")}
                alt="profile"
                className="img-fluid img-thumbnail col-6"
                id="profile-img"
              />
            </div>
            <div className="col-lg-6 py-4">
              <h1>Hello!</h1>
              <h3>My name is Tang Ho Hin, Gordon </h3>
              <p className="mt-5">
                I love developing web applications and I have helped my friends
                to build a web application. I have coded a data-entry system
                called{" "}
                <Link to="/projects/freemedcure" className="link">
                  FreeMedCure
                </Link>{" "}
                for my friend who is studying Chinese Medicine.
              </p>

              <p>
                For my final year project, I developed a web application called
                Fast Q&A that is a web application for e-learning. Check out my
                recent projects for more!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
