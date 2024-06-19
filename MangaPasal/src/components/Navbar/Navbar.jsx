import "./Navbar.css";
import logo from "../assets/Logo.png";
import cart from "../assets/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" className="logo" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ongoing");
          }}
        >
          <Link to="/ongoing" style={{ textDecoration: "none" }}>
            Ongoing{" "}
          </Link>{" "}
          {menu === "ongoing" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("complete");
          }}
        >
          <Link to="/complete" style={{ textDecoration: "none" }}>
            {" "}
            Completed
          </Link>{" "}
          {menu === "complete" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("latest");
          }}
        >
          <Link to="/latest" style={{ textDecoration: "none" }}>
            {" "}
            Latest
          </Link>{" "}
          {menu === "latest" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" className="cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
