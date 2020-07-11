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
    window.addEventListener("scroll", this.handleNavBg);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleNavBg);
  }

  handleNavBg = () => {
    const onTop = window.scrollY === 0 ? true : false;
    const expanded =
      document
        .getElementById("navbar-toggle-button")
        .getAttribute("aria-expanded") === "true";

    if (onTop && !expanded) {
      this.setState({ navClass: "" });
    } else {
      this.setState({ navClass: "navBg" });
    }
  };

  handleClick = () => {
    // if screen solution is <= 768px, the navbar toggler button appears
    // only if the button appears we will execute the following line
    if (window.matchMedia("(max-width: 768px)").matches)
      document.getElementById("navbar-toggle-button").click();
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
          id="navbar-toggle-button"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.handleNavBg}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/home" className="navLink" onClick={this.handleClick}>
              Home
            </Link>
            <Link to="/aboutme" className="navLink" onClick={this.handleClick}>
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
                <Link
                  to="/projects/freemedcure"
                  className="dropdown-item"
                  onClick={this.handleClick}
                >
                  FreeMedCure
                </Link>
              </div>
            </li>
          </ul>

          <ul className="mt-5 mt-md-0 ml-auto">
            <li className="list-inline-item">
              <LinkedInBtn onClick={this.handleClick} />
            </li>
            <li className="list-inline-item">
              <EmailBtn onClick={this.handleClick} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
