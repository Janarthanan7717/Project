import React from "react";

const education = [
  {
    year: "2023 — 2027",
    degree: "B.E Computer Science and Engineering",
    institution: "Panimalar Engineering College",
    result: "Currently Studying – IV Year"
  },
  {
    year: "2022 — 2023",
    degree: "12th Grade (CBSE)",
    institution: "Dayasadan Agarwal Vidyalaya",
    result: "Score: 69%"
  },
  {
    year: "2020 — 2021",
    degree: "10th Grade (CBSE)",
    institution: "Ravindra Bharathi Global School",
    result: "Score: 74%"
  }
];

function Edu() {
  return (
    <section id="education" className="section dark-section">
      <div className="section-heading">
        <span>06</span>
        <h2>Education</h2>
      </div>
      <div className="education">
        {education.map((item) => (
          <div className="education-item" key={item.year}>
            <div className="education-year">
              {item.year}
            </div>
            <div className="education-details">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.result}</p>
              <span>Chennai, India</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Edu;
