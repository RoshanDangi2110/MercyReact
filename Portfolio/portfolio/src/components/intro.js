import React from "react";
import "./intro.css";
import bg from "../assets/bg.jpg";
import hire from "../assets/hire.jpg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <spam className="hello">Hello,</spam>
        <br />
        <spam classname="intro">
          I'm <spam classname="name">Roshan</spam>
          <br />
          Web Developer
          <p className="introP">
            I am a student studying at ACHS pursuaing Bachelor's In Computer
            Science and Technology.
            <br />I am doing internship at Mercy Technology.
          </p>
          <Link>
            <button className="btn">
              <img src={hire} alt="" className="buttonImg" />
              Hire Me
            </button>
          </Link>
        </spam>
      </div>
      <img src={bg} alt="Background Image" className="bg" />
    </section>
  );
};

export default Intro;
