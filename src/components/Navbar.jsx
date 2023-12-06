import React from "react";
import callusnow from "../images/call us icon.png";
import wtsp from "../images/whatsapp.png";
import apply from "../images/apply.png";
import download from "../images/download.png";

const Navbar = () => {
  return (
    <div className="nav-section">
      <div className="nav-grandparent">
        <div className="nav-parent">
          <img src={callusnow} alt="" />
          <p>Call Us Now!</p>
        </div>
        <div className="nav-parent">
          <img src={wtsp} alt="" />
          <p>Say Hello On Whatsapp</p>
        </div>
        <div className="nav-parent">
          <img src={apply} alt="" />
          <p>Apply Now</p>
        </div>
        <div className="nav-parent">
          <img src={download} alt="" />
          <p>Download Brochure</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
