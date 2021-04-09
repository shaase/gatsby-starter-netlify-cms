import React from "react";
import parse from "html-react-parser";
import { Show } from "../../types";
import styles from "./index.module.scss";

interface Props {
  show: Show;
}

const ShowComponent: React.FC<Props> = ({ show }: Props) => {
  const { title, links } = show;
  const products = links
    .filter((l) => l.title.includes("Lenvima") || l.title.includes("Halaven"))
    .map((l) => l.label);

  return (
    <div className={styles.container}>
      <div>
        {title}
        <div>
          {parse(products[0])}{" "}
          {products.length > 1 && <>and {parse(products[1])}</>}
        </div>

        <br />
        <br />
        {React.Children.toArray(
          links.map((link) => <a href={link.url}>{parse(link.label)}</a>)
        )}
      </div>
    </div>
  );
};

export default ShowComponent;
