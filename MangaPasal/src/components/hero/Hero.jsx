import React from "react";
import hand_icon from "../assets/Bungodogs.jpg";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/Blueexorcist.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Latest Mangas:</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>for everyone</p>
          <div className="hero-latest-btn">
            <div className="lm">Latest Manga</div>
            <img src={arrow_icon} alt="" className="arr" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
