import React from "react";
import { Show } from "../../types";
import Disclaimer from "./Disclaimer";
import Header from "./Header";
import Links from "./Links";
import Chevron from "./Chevron";
import Mission from "./Mission";
import styles from "./index.module.scss";

interface Props {
  show: Show;
}

const ShowComponent: React.FC<Props> = ({ show }: Props) => {
  const { links, products } = show;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Disclaimer products={products} />
        <Header />
        <Links links={links} />
        <Chevron />
        <Mission />
      </div>
    </div>
  );
};

export default ShowComponent;
