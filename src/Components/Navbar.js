import React, { useState } from "react";
import "../css/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Health Check</h1>
        <div className="menu_icon">
          <MenuIcon onClick={() => setShow(!show)}></MenuIcon>
        </div>
      </div>
      {show ? (
        <ul>
          <li>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Home
            </Link>
          </li>

          <li className="special_li">
            <Link
              to="/diet-calculator"
              style={{ color: "black", textDecoration: "none" }}
            >
              Diet
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
        </ul>
      ) : null}

      <div className="test_navbar">
        <ul>
          {/* <a className="active"> Home</a> */}
          <li>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Home
            </Link>
          </li>

          {/* <a>Diet Calculator</a> */}
          <li>
            <Link
              to="/diet-calculator"
              style={{ color: "black", textDecoration: "none" }}
            >
              Diet
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
