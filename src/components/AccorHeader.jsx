import React from "react";

const AccorHeader = ({ btnName }) => {
  return (
    <div className="btnAccord">
      <button>
        {btnName} <span className="deepcolor">FAQs</span>▽
      </button>
    </div>
  );
};

export default AccorHeader;
