import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:'rgb(29,161,242)', marginRight: "2rem"}}/>
          <div>
            <p>123 Housing society</p>
            <p>Bangladesh</p>
          </div>
        </div>
        <div className="phone">
        <h4><FaPhone size={20} style={{color:'rgb(29,161,242)', marginRight: "2rem"}}/>
        123456789</h4>
        </div>
        <div className="email">
        <h4><FaMailBulk size={20} style={{color:'rgb(29,161,242)', marginRight: "2rem"}}/>
        Info@mail.com</h4>
        </div>
      </div>
      <div className="right">
        <h4>About the Company</h4>
        <p>This is the best useful website 
          you will ever come acroos, known for its assurance
          and quality of help that it provides
        </p>
        <div className="social">
        <FaFacebook size={20} style={{color:'rgb(29,161,242)', marginRight: "2rem"}}/>
        <FaTwitter size={20} style={{color:'rgb(29,161,242)', marginRight: "2rem"}}/>
        <FaLinkedin size={20} style={{color:'rgb(29,161,242)', marginRight: "2rem"}}/>
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
