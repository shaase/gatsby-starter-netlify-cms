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

const Show: React.FC<Props> = ({ show }: Props) => {
  const { links } = show;
  const products = links
    .filter((l) => l.title.includes("Lenvima") || l.title.includes("Halaven"))
    .map((l) => l.label);

  return (
    <div className={styles.container}>
      <Disclaimer products={products} />
      <Header />
      <Links links={links} />
      <Chevron />
      <Mission />
    </div>
  );
};

export default Show;
