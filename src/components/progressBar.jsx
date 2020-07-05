import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProgressBar extends Component {
  render() {
    const { icon, label, color, percent } = this.props;

    return (
      <div className="row">
        <div className="title col">
          <FontAwesomeIcon icon={icon} fixedWidth size="3x" />
          <h5 className="txt-grey">{label}:</h5>
        </div>
        <div className="col">
          <div className="progress">
            <div
              className={`progress-bar ${color}`}
              role="progressbar"
              style={{ width: percent + "%" }}
              aria-valuenow={percent}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
