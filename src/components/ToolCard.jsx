import React from "react";

const ToolCard = () => {
  return (
    <div className="toolcard">
      <h3>
        Exclusive <span className="deepcolor">Scholarship</span>
      </h3>
      <h4>Duration: 3 Months</h4>
      <div className="priceSection">
        <p>₹25,000</p>
      </div>
      <div
        style={{
          height: "1.5px",
          backgroundColor: "#1d3c87c",
          marginBottom: "10px",
        }}
      ></div>
      <div className="btnsDiv">
        <button className="btns">Read More</button>
        <button className="btns">Download Curriculum</button>
      </div>
      <h4>Tools to Master</h4>
      <div className="boxParent">
        <div className="toolBox"></div>
        <div className="toolBox"></div>
        <div className="toolBox"></div>
        <div className="toolBox"></div>
        <div className="toolBox"></div>
        <div className="toolBox"></div>
      </div>
    </div>
  );
};

export default ToolCard;
