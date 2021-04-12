import React from "react";
import { Contacts } from "../../types";
import Header from "./Header";
import Profiles from "./Profiles";
import Chevron from "../Show/Chevron";
import styles from "./index.module.scss";

interface Props {
  contacts: Contacts;
}

const Contact: React.FC<Props> = ({ contacts }: Props) => {
  const { corporateAffairs, accountManagers, media } = contacts;
  return (
    <div className={styles.container}>
      <Header />

      <h3>CORPORATE AFFAIRS</h3>
      <Profiles profiles={corporateAffairs} />

      <h3>KEY ACCOUNT MANAGERS</h3>
      <Profiles profiles={accountManagers} />

      <h3>MEDIA</h3>
      <Profiles profiles={media} />

      <h3>MEDICAL SCIENCE LIAISONS (MSLs)</h3>
      <Profiles profiles={[]} />

      <Chevron />
    </div>
  );
};

export default Contact;
