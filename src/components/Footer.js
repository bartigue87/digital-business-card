import React from "react";
import facebook from "../images/Facebook Icon.png";
import twitter from "../images/Twitter Icon.png";
import instagram from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-icons" src={facebook} alt="facebook icon" />
      <img className="footer-icons" src={twitter} alt="twitter icon" />
      <img className="footer-icons" src={instagram} alt="instagram icon" />
      <img className="footer-icons" src={github} alt="github icon" />
    </div>
  );
}
