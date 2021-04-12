import React from "react";
import styles from "./index.module.scss";
import logo from "../../img/eisai_logo.png";

const Chevron: React.FC = () => {
  return (
    <div className={styles.chevron}>
      <div className={styles.left} />
      <div className={styles.right} />
    </div>
  );
};

export default Chevron;
