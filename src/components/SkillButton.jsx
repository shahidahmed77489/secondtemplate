import React from "react";

const SkillButton = ({ btnName, backg, width, color, font }) => {
  return (
    <button
      className="skillbtnss"
      style={{
        backgroundColor: backg,
        width: width,
        color: color,
        fontSize: font,
      }}
    >
      {btnName}
    </button>
  );
};

export default SkillButton;
