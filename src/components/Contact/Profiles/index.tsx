import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Contact } from "../../../types";
import styles from "./index.module.scss";
import mail from "../../../images/email.svg";

interface Props {
  profiles: Contact[];
}

const Profiles: React.FC<Props> = ({ profiles }: Props) => {
  return (
    <div className={styles.profiles}>
      {React.Children.toArray(
        profiles.map((c) => {
          const image = getImage(c.photo);
          return (
            <div className={styles.profile}>
              <div className={styles.photo}>
                {image !== undefined && (
                  <GatsbyImage image={image} alt={c.name} />
                )}
              </div>

              <div className={styles.info}>
                <h1>{c.name}</h1>
                <h2>{c.title}</h2>

                {c.email === undefined ? (
                  <a href={`mailto:ESI_OncSalesInfo@eisai.com`}>
                    <img src={mail} alt="Email" />
                    <div>ESI_OncSalesInfo@eisai.com</div>
                  </a>
                ) : (
                  <a href={`mailto:${c.email}`}>
                    <img src={mail} alt="Email" />
                    <div>{c.email}</div>
                  </a>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Profiles;
