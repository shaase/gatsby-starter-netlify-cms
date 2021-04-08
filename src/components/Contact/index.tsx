import React from "react";
import { Contacts } from "../../types";
import Profile from "./profile";
import styles from "./index.module.scss";

interface Props {
  contacts: Contacts;
}

const Contact: React.FC<Props> = ({ contacts }: Props) => {
  const { corporateAffairs, accountManagers, media } = contacts;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h1>EISAI ONCOLOGY</h1>
            <h2>[ CONTACT INFORMATION ]</h2>
          </div>

          <a href="http://eisaionccongresses.com">
            <img
              className={styles.logo}
              src="images/logo.svg"
              alt="Eisai logo"
            />
          </a>
        </div>

        <h3>CORPORATE AFFAIRS</h3>
        <div className={styles.section}>
          {React.Children.toArray(
            corporateAffairs.map((c) => <Profile contact={c} />)
          )}
        </div>

        <h3>KEY ACCOUNT MANAGERS</h3>
        <div className={styles.section}>
          {React.Children.toArray(
            accountManagers.map((c) => <Profile contact={c} />)
          )}
        </div>

        <h3>MEDIA</h3>
        <div className={styles.section}>
          {React.Children.toArray(media.map((c) => <Profile contact={c} />))}
        </div>

        <h3>MEDICAL SCIENCE LIAISONS (MSLs)</h3>
        <div className={styles.section}>
          <div className={styles.msls}>
            <h4>To reach a Medical Science Liaison, please email us at:</h4>
            <a href="mailto:ESI_OncMSLContact@eisai.com">
              <img src="images/email.svg" alt="email" />
              <div>ESI_OncMSLContact@eisai.com</div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.chevron}>
        <img src="images/chevron.svg" alt="page arrow" />
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Contact;
