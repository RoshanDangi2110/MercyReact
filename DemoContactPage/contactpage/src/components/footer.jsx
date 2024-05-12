import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/srf.png";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="Footer">
      <nav className="Navbar">
        <img src={logo} alt="Mahan Nepal Logo" className="Logo" />
        <ul className="NavItem">
          <li>
            <Link className="Itemlist1">Home</Link>
          </li>
          <li>
            <Link className="Itemlist2">Publication</Link>
          </li>
          <li>
            <Link className="Itemlist3">About Author</Link>
          </li>
          <li>
            <Link className="Itemlist4">About Us</Link>
          </li>
          <li>
            <Link className="Itemlist5">Contact</Link>
          </li>
        </ul>
        <div>
          <FontAwesomeIcon icon={faFacebook} className="fbicon" />
        </div>
      </nav>
      <div className="line"></div>
      <div className="subs">
        <p className="txtsub">Subscribe Now</p>
        <input
          type="text-area"
          placeholder="info@example.com"
          className="TArea"
        />
        <button type="submit" className="subscbtn">
          Subscribe
        </button>
      </div>
      <div className="copytxt">
        <p>@ Copyright 2024. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
