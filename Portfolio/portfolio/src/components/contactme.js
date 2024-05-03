import React from "react";
import "./contactme.css";
import fb from "../assets/fb.webp";
import fifa from "../assets/fifa17.webp";
import pubg from "../assets/pubg.webp";
import HP from "../assets/hamropatro.webp";
import ins from "../assets/insta.webp";
import X from "../assets/X.webp";
const contactme = () => {
  return (
    <section id="clients">
      <div className="client">
        <h1 className="clientsTitle">My Clients</h1>
        <p>
          Here are some of the clients I have worked while working as a frontend
          developer.
        </p>
        <div className="clientImgs">
          <img src={fb} alt="" className="cIMG" />
          <img src={fifa} alt="" className="cIMG" />
          <img src={pubg} alt="" className="cIMG" />
          <img src={HP} alt="" className="cIMG" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <spam className="cDESC">
          Please Fill the following form to send querries or support.
        </spam>
        <form className="contactFrm">
          <input type="text" className="name" placeholder="Enter You Name" />
          <input
            type="email"
            className="email"
            placeholder="Enter Your Email"
          />
          <textarea
            name="message"
            className="message"
            rows="4"
            placeholder="Enter you querries"
          />
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={fb} alt="Facebook" className="link" />
            <img src={ins} alt="Instagram" className="link" />
            <img src={X} alt="X" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default contactme;
