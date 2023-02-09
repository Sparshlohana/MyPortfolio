import React from "react";
import ContactMeHeading from "../ContactMeHeading/ContactMeHeading";
import ContactMeIcons from "../ContactMeIcons/ContactMeIcons";
import "./contactMe.css";

const ContactMe = () => {
  return (
    <div className="contactMe">
      <ContactMeHeading />
      <ContactMeIcons />
    </div>
  );
};

export default ContactMe;
