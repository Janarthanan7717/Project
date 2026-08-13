import React from "react";

const categories = [
  {
    title: "Programming",
    items: ["Python", "Java", "C#", "SQL", "JavaScript"]
  },
  {
    title: "Web & Frameworks",
    items: ["React.js", "HTML", "CSS", "REST APIs"]
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"]
  },
  {
    title: "Tools",
    items: ["GitHub", "Postman", "VS Code"]
  },
  {
    title: "Core Concepts",
    items: [
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Network"
    ]
  },
  {
    title: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Team Collaboration",
      "Agile Mindset"
    ]
  }
];

function Tec() {
  return (
    <section id="skills" className="section dark-section">
      <div className="section-heading">
        <span>02</span>
        <h2>Skills</h2>
      </div>
      <div className="stack-grid">
        {categories.map((category, index) => (
          <div className="stack-card" key={category.title}>
            <span className="stack-number">
              0{index + 1}
            </span>
            <h3>{category.title}</h3>
            <div className="stack-items">
              {category.items.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Tec;
