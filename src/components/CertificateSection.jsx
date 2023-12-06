import React from "react";
import vector from "../images/Vector 1.png";
import FormButton from "./HeaderButton/FormButton";
import logo from "../images/the-iot-logo-new.webp";
import certificate from "../images/cerificate.png";
const CertificateSection = () => {
  return (
    <>
      <div className="certificate-Section">
        <div className="aside-circle setPosition">
          <img src={vector} alt="error" />
        </div>
        <div className="certParent">
          <div className="leftSide">
            <h3>Certification Program in</h3>
            <h2>Web Development</h2>
            <div className="feeStructure">
              <div className="fee">
                <p>Fee:</p>
              </div>
              <div className="amount">
                <p>24,999 +GST</p>
              </div>
            </div>
            <p>( Avail Scholarship Upto 20% )</p>
            <div className="btnsection">
              <FormButton btnName={"View Fee Plans"} />
              <FormButton btnName={"Apply Now"} />
            </div>
            <div className="certifiedby">
              <div className="leftSide">
                <h3>Certificate From</h3>
              </div>
              <div className="logoSize">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="rightSide">
            <img src={certificate} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="bene-header">
          <h2>FAQs</h2>
          <h2>
            Questions? <span className="deepcolor">Look Here</span>
          </h2>
          <p className="paragr">
            We may be able to assist you with a problem you may be having
            related to the Data Analyst Course! Please refer to the types of
            frequent problems listed below, that will be useful in resolving
            them. For more assistance mail us at info@theiotacademy.co
          </p>
        </div>
      </div>
    </>
  );
};

export default CertificateSection;
