import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpeg";

import { Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

const HeroImg = () => {

  const { user } = useAuthContext();
  return <div className="hero">
    <div className="mask">
      <img className="into-img" 
      src={IntroImg} alt="IntroImg"
      />
    </div>
    <div className="content">
      <p>Hey , {user.displayName}</p>
      <p>Need a help to know about the disasters happening?</p>
      <h1>You are at right place</h1>
      <div>
        <Link to='/project' className="btn">Try Now</Link>
        <Link to='/contact' className="btn btn-light">Contact US</Link>
      </div>
    </div>
  </div>;
};

export default HeroImg;
