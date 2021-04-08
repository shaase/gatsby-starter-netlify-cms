import React from "react";
import { Show } from "../../types";
import styles from "./index.module.scss";

interface Props {
  show: Show;
}

const Show: React.FC<Props> = ({ show }: Props) => {
  console.log(show);
  return <div className={styles.container} />;
};

export default Show;