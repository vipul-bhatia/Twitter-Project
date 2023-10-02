import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from "react";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>Who we are?</h1>
      <br/>
      <p>
      We at tweetmydisasters.com  research about the dependence of disaster management teams on Social media , specially Twitter and help in technological enhancement of social media by integrating AI into it.Natural disasters seem to have increased and occur more frequently during recent years.


      </p>
      <p>The social media is a common platform where anyone with even the least accees to the internet can take help from.



To enhance the response effectiveness of a rescue team , time is most important factor to provide help to victims .The technological tool researched and applied  by us to make an AI machine learning model for sorting Tweets related to a particular disaster can be a powerful tool if used effectively.</p>
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
