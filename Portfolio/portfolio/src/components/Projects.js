import React from "react";
import proj1 from "../assets/jobs.jpg";
import proj2 from "../assets/VAIM.jpg";
import proj3 from "../assets/manga.webp";
import proj4 from "../assets/contactman.webp";
import "./Projects.css";
const Projects = () => {
  return (
    <section id="Projects">
      <h2 className="projecttitle">Projects I have Worked On</h2>
      <span className="projectDesc">
        I have worked on few projects which are listed as below.
        <div className="projectImgs">
          <img src={proj1} alt="" className="projectImg" />
          <img src={proj2} alt="" className="projectImg" />
          <img src={proj3} alt="" className="projectImg" />
          <img src={proj4} alt="" className="projectImg" />
        </div>
        <button className="seeBtn">See More</button>
      </span>
    </section>
  );
};

export default Projects;
