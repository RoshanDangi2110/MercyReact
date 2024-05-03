import React from "react";
import "./skills.css";
import RecLanguage from "../assets/react.webp";
import JavaLanguage from "../assets/java.webp";
const skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Speciality</span>
      <span className="skillDesc">
        <br /> I am a skilled and passionate web developer who is creating
        visually appealing and user friendly websites. I have a strong
        understanding of web designing concepts and have experience of using
        different web designing tools and techniques.I am oroficient in
        HTML,CSS,JS as well as designing softwares sush as Adobe
        Photoshop,Illustrator and Figma
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={RecLanguage} alt=" " className="skillBarImg" />
          <div className="skillBarText">
            <h2>React JS</h2>
            <p>I am quite proficient in react js.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={JavaLanguage} alt=" " className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java Programming</h2>
            <p>I am quite proficient in java language</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skill;
