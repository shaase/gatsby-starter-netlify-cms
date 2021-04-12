import React from "react";
import { Contact } from "../../../types";
// import Profile from "./profile";
import styles from "./index.module.scss";
import email from "../../../img/contact/email.svg";

interface Props {
  profiles: Contact[];
}

const Profiles: React.FC<Props> = ({ profiles }: Props) => {
  return (
    <div className={styles.profiles}>
      {React.Children.toArray(
        profiles.map((c) => (
          <div className={styles.profile}>
            <div className={styles.photo}>
              <img src={c.photo} alt={c.name} />
            </div>

            <div className={styles.info}>
              <h1>{name}</h1>
              <h2>{c.title}</h2>

              <a href={`mailto:${c.email}`}>
                <img src={email} alt="email" />
                <div>{c.email}</div>
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Profiles;
