import React from "react";
import parse from "html-react-parser";
import { Link } from "../../types";
import styles from "./index.module.scss";

interface Props {
  links: Link[];
}

const Links: React.FC<Props> = ({ links }: Props) => {
  return (
    <div className={styles.links}>
      {React.Children.toArray(
        links.map((link) => <a href={link.url}>{parse(link.label)}</a>)
      )}
    </div>
  );
};

export default Links;
