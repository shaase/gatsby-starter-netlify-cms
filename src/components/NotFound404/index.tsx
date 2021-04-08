import React from "react";
import styles from "./index.module.scss";

interface Props {
  title: string;
  description: string;
}

const NotFound: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default NotFound;
