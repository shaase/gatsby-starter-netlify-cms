import React from "react";
import { Show } from "../../types";
import styles from "./index.module.scss";

interface Props {
  show: Show;
}

// const matches = (key: string, links: Link[]): boolean => {
//   const filtered = links.filter((l) => l.includes(key));
//   return filtered.length > 0;
// };

const ShowComponent: React.FC<Props> = ({ show }: Props) => {
  const { title, links } = show;
  // const hasLenvima = matches("Lenvima", links);
  // const hasHalaven = matches("Halaven", links);
  // console.log(links, hasLenvima, hasHalaven);
  return (
    <div className={styles.container}>
      <div>
        {title}
        <br />
        <br />
        {React.Children.toArray(links.map((link) => <div>{link}</div>))}
      </div>
    </div>
  );
};

export default ShowComponent;
