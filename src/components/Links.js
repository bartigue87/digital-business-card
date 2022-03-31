import React from "react";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

export default function Links() {
  return (
    <div className="btns-container">
      <button className="email-btn">
        <img className="email-logo" src={email} alt="envolope icon" />
        Email
      </button>
      <button className="linked-btn">
        <img className="linkedin-logo" src={linkedin} alt="linkedin icon" />
        LinkedIn
      </button>
    </div>
  );
}
