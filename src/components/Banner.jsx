import React from "react";
import Navbar from "./Navbar";
import course from "../images/duration-course.png";
import live from "../images/Group 267.png";
import job from "../images/job.png";
import salary from "../images/average-salary.png";

const Banner = () => {
  return (
    <>
      <div className="banner-body">
        <Navbar />
        <div className="bannerHeader">
          <h1>
            <span className="deepcolor">Full Stack </span>Web Developement
            Course
          </h1>
          <p>
            The IoT Academy offers well-tailored web development course which
            trains you in python language for managing data, SQL for data
            sorting & filtering and tableau for data visualization
          </p>
          <div>
            <div className="parent-button">
              <button>Apply Now</button>
            </div>
            <div className="parent-button">
              <button>Download Brochure</button>
            </div>
            <div className="parent-button">
              <button>Ask For Demo</button>
            </div>
          </div>
        </div>
        <div className="rect-parent">
          <div className="rectangle">
            <img src={course} alt="" />
            <h3>Course Duration</h3>
            <h2>6 Months</h2>
          </div>
          <div className="rectangle rectange2">
            <img src={live} alt="" />
            <h3>Live Projects</h3>
            <h2>8+ Projects</h2>
          </div>
          <div className="rectangle">
            <img src={job} alt="" />
            <h3>Job Assistance</h3>
            <h2>100%</h2>
          </div>
          <div className="rectangle rectange2">
            <img src={salary} alt="" />
            <h3>Average Salary</h3>
            <h2>16.2 LPA</h2>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Banner;
