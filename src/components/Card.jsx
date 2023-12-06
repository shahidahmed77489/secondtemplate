import React from "react";
import topimage from "../images/toplayer.png";
import bottom from "../images/bottomlayer.png";

const Card = ({ versatile, header, paragraph }) => {
  return (
    <div className="card-parent">
      <img src={topimage} alt="error" className="img1" />
      <img src={bottom} alt="error" className="img2" />
      <img src={versatile} alt="error" className="cardlogo" />
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
