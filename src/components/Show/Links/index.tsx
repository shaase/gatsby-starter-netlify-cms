import React from "react";
import { Link } from "gatsby";
import parse from "html-react-parser";
import { Link as ShowLink } from "../../../types";
import styles from "./index.module.scss";

interface Props {
  links: ShowLink[];
}

const Links: React.FC<Props> = ({ links }: Props) => {
  return (
    <div className={styles.links}>
      {React.Children.toArray(
        links.map((link) => (
          <>
            {link.url.includes("http") ? (
              <a href={link.url}>{parse(link.label)}</a>
            ) : (
              <Link to={link.url}>{parse(link.label)}</Link>
            )}
          </>
        ))
      )}
    </div>
  );
};

export default Links;
