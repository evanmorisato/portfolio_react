import React from "react";
import Icon from "./icon";

const ContactMeIcon = (props) => {
  return (
    <div style={props.style} className="text-center">
      <Icon
        href="https://github.com/evanmorisato"
        alt="GitHub icon"
        iconPic="fab fa-github"
      />
      <Icon
        href="https://www.linkedin.com/in/emorisato/"
        alt="Linked In icon"
        iconPic="fab fa-linkedin"
      />
      {/* <Icon
        href="https://twitter.com/evanmorisato"
        alt="Twitter icon"
        iconPic="fab fa-twitter"
      /> */}
      <Icon href="mailto:evanmorisato@gmail.com" alt="Email icon" iconPic="fas fa-envelope" />
      <Icon href="EvanMorisatoResume.docx" alt="resume icon" iconPic="far fa-file" />
    </div>
  );
};

export default ContactMeIcon;
