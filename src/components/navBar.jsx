import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkedInBtn from "./LinkedInBtn";
import "../styles/navBar.css";
import EmailBtn from "./emailBtn";

class NavBar extends Component {
  state = {
    navClass: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    let navClass = "";
    if (window.scrollY !== 0) {
      navClass = "navBg";
    }
    this.setState({ navClass });
  };

  render() {
    return (
      <nav
        className={`navbar navbar-expand-md navbar-dark fixed-top ${this.state.navClass}`}
      >
        <Link to="/home" className="navbar-brand">
          <img
            src={require("../assets/img/android-chrome-512x512.png")}
            alt="logo"
            className="logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-3">
            <Link to="/home" className="navLink">
              Home
            </Link>
            <Link to="/aboutme" className="navLink">
              About Me
            </Link>
            <li className="nav-item dropdown">
              <a
                className="navLink dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recent Projects
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/projects/freemedcure" className="dropdown-item">
                  FreeMedCure
                </Link>
              </div>
            </li>
          </ul>
          <div className="d-flex px-2">
            <div>
              <LinkedInBtn />
            </div>
            <div>
              <EmailBtn />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
