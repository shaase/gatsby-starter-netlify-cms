import React from "react";
import { Show } from "../../types";
import styles from "./index.module.scss";

interface Props {
  show: Show;
}

const ShowComponent: React.FC<Props> = ({ show }: Props) => {
  console.log(show);
  styles.container;
  return <div className={styles.container} />;
};

export default ShowComponent;
