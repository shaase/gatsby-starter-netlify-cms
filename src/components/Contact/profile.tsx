import React from "react";
import { Contact } from "../../types";

interface Props {
  contact: Contact;
}

const Profile: React.FC<Props> = ({ contact }: Props) => {
  const { name, title, email, photo } = contact;

  return (
    <div className="profile">
      <div className="photo">
        <img src={photo} alt="cronin" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{title}</h5>
        <a href={`mailto:${email}`}>
          <img src="images/email.svg" alt="email" />
          <div>{email}</div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
