import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpeg";

import { Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

const HeroImg = () => {

  const { user } = useAuthContext();
  return <div className="hero">
    <div className="mask">
      <img className="intro-img" 
      src={IntroImg} alt="IntroImg"
      />
    </div>
    <div className="content">
      <p>Hey , {user.displayName}</p>
      <p>do you need to know about the latest disaster?</p>
      <h1>You are at the right place</h1>
      <br />
      <br />
      <div>
        <Link to='/project' className="btn btn-small">Try ML Model</Link>
        <br />
        <br />
        <br />
        <Link to='/contact' className="btn btn-light">Contact US</Link>
      </div>
    </div>
  </div>;
};

export default HeroImg;
