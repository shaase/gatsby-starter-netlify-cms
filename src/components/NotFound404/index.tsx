import React from "react";
import * as styles from "./index.module.scss";

interface Props {
  title: string;
  description: string;
}

const NotFound: React.FC<Props> = ({ title, description }: Props) => {
  console.log(styles);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default NotFound;
