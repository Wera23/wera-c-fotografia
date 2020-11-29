import React from "react";
import image from "./images/image1.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutDesc">
        <h2>Wera Chodanionek</h2>
        <h3>Fotografia</h3>
      </div>
        <p></p>
      <img className="aboutImage" src={image} alt=""/>    
    </div>
  );
};

export default About;
