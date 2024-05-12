import "./contact.css";
//import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpg";
const Contact = () => {
  return (
    <div className="overall">
      <div className="topdiv">
        <div className="top-left">
          <img src={logo2} alt="green logo" className="Logo1" />
        </div>
        <div className="navbar">
          <ul className="navlist">
            <li className="listitem">Home</li>
            <li className="listitem">Publication</li>
            <li className="listitem">About Author</li>
            <li className="listitem">About Us</li>
            <li className="listitem">Contact</li>
            <li className="listitem">Gallery</li>
            <li className="listitem">Login</li>
          </ul>
        </div>
      </div>
      <div className="bottomdiv">
        <div className="Top-right">
          <div className="left">
            <p>Mahan Nepali</p>
            <p>SAVE THE RHINO FOUNDATION NEPAL</p>
          </div>
          <div className="right">About Us</div>
        </div>
        <div className="info">
          <div className="infocon">
            <p>
              Matribhumi Prakkashan and Uddam (Motherland Publication and
              Enterprise) <br />
              Mr. Kamal Jung Kunwar
              <br />
              <br />
              9841885975
              <br />
              <br />
              Kathmandu, Nepal <br />
              srfnepal@gmail.com <br />
              info@srfnepal.org.np
              <br />
              www.srfnepal.org.np
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
