import React from "react";
import logo from "../images/the-iot-logo-new.webp";
import HeaderButton from "./HeaderButton/HeaderButton";

const Header = () => {
  return (
    <div className="parent">
      <div className="headerParent">
        <div className="leftHeader">
          <img src={logo} alt="" />
          <span>
            <HeaderButton name={"All Courses"} />
          </span>
        </div>
        <div className="rightHeader">
          <span>
            <i className="fa-solid fa-magnifying-glass magnifylogo"></i>
          </span>
          <ul className="list">
            <li>
              <a href="https://www.google.com/">Resources</a>
            </li>
            <li>
              <a href="https://www.google.com/">Blog</a>
            </li>
            <li>
              <a href="https://www.google.com/">Contact Us</a>
            </li>
            <li>
              <HeaderButton name={"Login"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
