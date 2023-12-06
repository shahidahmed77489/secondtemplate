import React from "react";
import vector from "../images/Vector 1.png";
import FormButton from "./HeaderButton/FormButton";
import Card from "./Card";
import versatile from "../images/versatile.png";
import skills from "../images/skills.png";
import portfolio from "../images/portfolio.png";
import career from "../images/job.png";
import ToolCard from "./ToolCard";
import SkillButton from "./SkillButton";

const Article = () => {
  return (
    <>
      <div className="aside-parent">
        <div className="aside-circle">
          <img src={vector} alt="error" />
        </div>
        <div className="left-content">
          <div className="asideHeading">
            <h2>
              Let’s <span className="deepcolor">Connect</span> &{" "}
              <span className="deepcolor">Apply Now</span> To Get Exclusive
              <span className="deepcolor">Scholership</span>
            </h2>
          </div>
          <div className="form-parent">
            <div className="inputsection">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>
            <input
              type="number"
              placeholder="Phone Number"
              className="input2"
            />
            <input type="email" placeholder="Email" className="input2" />
            <FormButton btnName={"Submit"} />
            <h2>Hurray! Limited Seats Only</h2>
          </div>
        </div>
      </div>
      <div className="bene-header">
        <h2>Benefits</h2>
      </div>
      <div className="cardSection">
        <Card
          versatile={versatile}
          header={"Versatility"}
          paragraph={
            "Master both front-end and back-enddevelopment, becoming a tech Swiss Army knife ready for any project."
          }
        />
        <Card
          versatile={skills}
          header={"In-Demand Skills"}
          paragraph={
            "Learn languages like HTML, CSS & JavaScript, and dive into frameworks like React and Node.js, making you a hot commodity in the tech market."
          }
        />
        <Card
          versatile={portfolio}
          header={"Project-Ready Portfolio"}
          paragraph={
            "Build real-world projects, creating a robust portfolio showcasing your abilities to potential employers."
          }
        />
        <Card
          versatile={career}
          header={"Career Advancement"}
          paragraph={
            "Whether you're a beginner or a seasoned coder, this course propels you towards lucrative opportunities in the dynamic world of web development."
          }
        />
      </div>
      <div className="bene-header">
        <h2>Options</h2>
      </div>
      <div className="toolCard-parent">
        <ToolCard />
        <ToolCard />
        <ToolCard />
      </div>
      <div className="skillSection">
        <div className="skillHeader">
          <h2>
            Tools & <span className="deepcolor">Skills</span>
          </h2>
          <div className="btnSkillhandle">
            <SkillButton btnName={"HTML"} backg={"white"} width={"16%"} />
            <SkillButton btnName={"CSS"} backg={"white"} width={"16%"} />
            <SkillButton btnName={"JavaScript"} backg={"white"} width={"16%"} />
            <SkillButton btnName={"PHP"} backg={"white"} width={"16%"} />
            <SkillButton
              btnName={"Web Designing"}
              backg={"white"}
              width={"16%"}
            />
            <SkillButton
              btnName={"Responsive Design"}
              backg={"white"}
              width={"16%"}
            />
            <SkillButton btnName={"Node.js"} backg={"white"} width={"16%"} />
            <SkillButton
              btnName={"Testing & Debugging"}
              backg={"white"}
              width={"16%"}
            />
            <SkillButton
              btnName={"Programme Frameworks"}
              backg={"white"}
              width={"16%"}
            />
          </div>
        </div>
      </div>
      <div className="bene-header">
        <h2>Roles</h2>
      </div>
      <div className="roleParent">
        <div className="role1">
          <SkillButton
            backg={"#4c409c"}
            btnName={"Front End Developer"}
            width={"32%"}
            color={"#fff"}
            font={"1.25rem"}
          />
          <SkillButton
            backg={"#4c409c"}
            btnName={"Back End Developer"}
            width={"32%"}
            font={"1.25rem"}
            color={"#fff"}
          />
          <SkillButton
            backg={"#4c409c"}
            btnName={"Full Stack Developer"}
            width={"32%"}
            color={"#fff"}
            font={"1.25rem"}
          />
        </div>
        <div className="role2">
          <SkillButton
            backg={"#4c409c"}
            btnName={"Web Designer"}
            width={"32%"}
            color={"#fff"}
            font={"1.25rem"}
          />
          <SkillButton
            backg={"#4c409c"}
            btnName={"Web Analyst"}
            width={"32%"}
            color={"#fff"}
            font={"1.25rem"}
          />
          <SkillButton
            backg={"#4c409c"}
            btnName={"Technical Consultant"}
            width={"32%"}
            color={"#fff"}
            font={"1.25rem"}
          />
        </div>
      </div>
    </>
  );
};

export default Article;
