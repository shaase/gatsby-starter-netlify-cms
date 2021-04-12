import React from "react";
import styles from "./index.module.scss";
import logo from "../../../images/logo.svg";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1>Eisai Oncology</h1>
        <h2>[ Contact Information ]</h2>
      </div>

      <div className={styles.right}>
        <img src={logo} alt="Eisai Logo" />
      </div>
    </div>
  );
};

export default Header;
