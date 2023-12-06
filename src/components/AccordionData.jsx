import React from "react";
import Accordion from "./Accordion";
import AccorHeader from "./AccorHeader";

const AccordionData = () => {
  const accordionValue = [
    {
      title: "How long does it take to learn web development through a course?",
      content: `Learning web development through a course takes about 3 to 4 months depending on complexity and modules.`,
    },
    {
      title:
        "What are the job prospects after completing a website development course?",
      content: `Completing a web development course opens doors to roles like web developer, UI/UX designer, or full-stack developer.`,
    },
    {
      title: `How do I choose the best web development course for my career?`,
      content: `Choose a website development course based on your skill level, course content, and real-world applicability.`,
    },
    {
      title: `What are the differences between self-paced and instructor-led web development courses?`,
      content: `Self-paced courses offer flexibility, while instructor-led ones provide guidance and interaction for a more structured learning experience.`,
    },
    {
      title: `Do web developers with certifications earn higher salaries than those without?`,
      content: `Certifications can enhance job prospects, but experience and skills also influence salaries.`,
    },
  ];
  const placementValue = [
    {
      title:
        "Do we get internships or practical experiences to improve placement opportunities?",
      content: `Yes, student will get hands-on practical experience that will enhance their placement opportunities.`,
    },
    {
      title: `What types of companies typically hire students of web development courses?`,
      content: ` Students are hired by IT companies, startups, e-commerce firms, and digital agencies like Infosys, TCS, Wipro, Flipkart, and Amazon.`,
    },
    {
      title: ` Can the course provider help with resume building and interview preparation for
         web development positions?`,
      content: `Yes, The IoT Academy web development certification course also assists in resume building and interview preparation.
`,
    },
    {
      title: ` What is the average salary for entry-level web developers?`,
      content: `The average salary for entry-level web developers in India is around ₹4 to ₹6 lakhs per annum`,
    },
    {
      title: `What is the salary of a full-stack web developer?`,
      content: `Full-stack web developers in India typically earn salaries ranging from ₹8 to ₹12 lakhs per annum based on experience and skills.`,
    },
  ];
  const courseValue = [
    {
      title: `What is the cost of a web development course, and are there financial aid options?`,
      content: `he cost of full stack web developer certification course is 20,000 INR + 18% GST. The fees payment mode is one time and monthly installment as per need.`,
    },
    {
      title: `Can I learn full stack web development through online courses?`,
      content: `Yes, full-stack web development can be learned through online as well offline with The IoT Academy.`,
    },
    {
      title: `What programming languages are covered in web development certification course?`,
      content: `Web development certification courses covers HTML, CSS, JavaScript, and frameworks like React or PHP.`,
    },
    {
      title: `What are the prerequisites for enrolling in a web development course?`,
      content: `There are not any prerequisites to learn full stack web development. Student with basic computer skills, any graduate
(completed/pursuing) is eligible for this course.`,
    },
    {
      title: `. Can I get a job as a web developer after completing a web developer certification course?`,
      content: `Yes, completing a web development certification course in India enhances job prospects, leading to roles like web developer, UI/UX designer, or full-stack developer.`,
    },
  ];

  return (
    <div className="accordionParent">
      <AccorHeader btnName={"General"} />
      <div className="accordion">
        {accordionValue.map((item) => (
          <>
            <Accordion title={item.title} content={item.content} />
          </>
        ))}
      </div>
      <AccorHeader btnName={"Placement"} />
      <div className="accordion">
        {placementValue.map((item) => (
          <>
            <Accordion title={item.title} content={item.content} />
          </>
        ))}
      </div>
      <AccorHeader btnName={"Course"} />
      <div className="accordion">
        {courseValue.map((item) => (
          <>
            <Accordion title={item.title} content={item.content} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AccordionData;
