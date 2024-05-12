import { FaFacebook } from "react-icons/fa";
import "./aboutauthor.css";
import pic from "../assets/author.png";
const Aboutauthor = () => {
  return (
    <div className="Overall">
      <div className="con">
        <div className="img">
          <img src={pic} alt="Author Image" className="img1" />
        </div>
        <div className="info">
          <div className="name">
            Kamal Jung <span className="kun"> Kunwar</span>
          </div>
          <br />
          <div className="DOB">
            Date of Birth
            <br />
            <span className="oct"> 31 October, 1969</span>
          </div>
          <div className="BP">
            Birth Place
            <span className="pok">
              <br /> Pokhara Metropolitan City-25, Hemja, Kaski, Nepal
            </span>
          </div>
          <FaFacebook className="fb" />
        </div>
      </div>
    </div>
  );
};

export default Aboutauthor;
