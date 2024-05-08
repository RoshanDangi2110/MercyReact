import Logo from "../assets/pubg.webp";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" className="logoimg" />
      </div>
      <div>
        <ul className="List">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Download</li>
        </ul>
      </div>
      <div>
        <button className="Btn">Login</button>
      </div>
    </nav>
  );
};
export default Nav;
