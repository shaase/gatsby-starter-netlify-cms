import React from "react";
import parse from "html-react-parser";
import styles from "./index.module.scss";

interface Props {
  products: string[];
}

const Disclaimer: React.FC<Props> = ({ products }: Props) => {
  const string =
    products.length === 1 ? products[0] : `${products.join(" and ")}`;

  return (
    <div className={styles.disclaimer}>
      The materials for {parse(string)} in this virtual exhibit are approved for
      use only in the United States. Prescribing information may vary depending
      on local approval in each country. Therefore, before prescribing any
      product, always refer to your local prescribing information and consult
      directly the local affiliate of the relevant company to address any
      questions.
    </div>
  );
};

export default Disclaimer;
