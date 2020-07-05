import React from "react";
import "../styles/curvedHeader.css";

const CurvedHeader = ({ title, subtitle }) => {
  return (
    <>
      <section className="curvedHeader">
        <div className="content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </section>
    </>
  );
};

export default CurvedHeader;
