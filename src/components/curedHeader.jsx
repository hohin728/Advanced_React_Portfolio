import React from "react";
import styles from "../styles/curvedHeader.module.scss";

const CurvedHeader = ({ title, subtitle }) => {
  return (
    <>
      <section className={styles.curvedHeader}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </section>
    </>
  );
};

export default CurvedHeader;
