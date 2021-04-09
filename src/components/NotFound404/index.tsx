import React from "react";
// import * as styles from "./index.module.scss";

interface Props {
  title: string;
  message: string;
}

const NotFound: React.FC<Props> = ({ title, message }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default NotFound;
