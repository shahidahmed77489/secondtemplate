import React from "react";
import "../HeaderButton/style.css";
const HeaderButton = ({ name }) => {
  return <button className="headerBtn">{name}</button>;
};

export default HeaderButton;
