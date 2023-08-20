import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from "react";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>Who we are?</h1>
      <p>
        We are a group of students from the University of Toronto who are
      </p>
      <Link to='/contact'>
        <button className="btn">Contact</button>
      </Link>
    </div>
    <div className="right">
      <div className="img-container"> 
      <div className="img-stack top">
        <img src={React1} className="img" alt="true"/>
      </div>
      <div className="img-stack bottom">
        <img src={React2} className="img" alt="true"/>
      </div>
      </div>
    </div>
  </div>;
};

export default AboutContent;
