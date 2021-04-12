import React from "react";
import styles from "./index.module.scss";
import logo from "../../../img/eisai_logo.png";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1>Eisai Oncology</h1>
        <p>
          At Eisai, it is our privilege and responsibility to put patients and
          their families first – providing access to the medicines they need and
          advancing our innovative research and development programs; and
          supporting the pioneers in patient advocacy and the healthcare
          providers who do so much for the metastatic and marginalized
          communities we seek to serve.
        </p>
      </div>

      <div className={styles.right}>
        <img src={logo} alt="Eisai Logo" />
      </div>
    </div>
  );
};

export default Header;
