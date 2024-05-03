import React from "react";
import "./navbar.css";
import logo from "../assets/logo.jpg";
import conctimg from "../assets/contact.webp";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="desktopMenuListItem"
        >
          <b> Home</b>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="desktopMenuListItem"
        >
          <b> About</b>
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="desktopMenuListItem"
        >
          <b>Projects</b>
        </Link>
        <Link
          activeClass="active"
          to="client"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="desktopMenuListItem"
        >
          <b>Client</b>
        </Link>
      </div>
      <button
        className="desktopMenuButton"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={conctimg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
