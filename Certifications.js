import React from "react";

const certifications = [
  {
    number: "01",
    name: "Python Developer Internship",
    details: "2025 • Offline"
  },
  {
    number: "02",
    name: "UiPath Automation Developer Associate Training",
    details: "NASSCOM FutureSkills Prime • July 2026"
  },
  {
    number: "03",
    name: ".NET Full Stack with JavaScript & React",
    details: "Offline"
  },
  {
    number: "04",
    name: "Oracle Cloud Infrastructure",
    details: "2024 • Online"
  }
];

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-heading">
        <span>05</span> 
        <h2>Certifications</h2>
      </div>
      <div className="certifications">
        {certifications.map((certificate) => (
          <div className="certificate" key={certificate.number}>
            <span className="certificate-number">
              {certificate.number}
            </span>
            <div>
              <h3>{certificate.name}</h3>
              <p>{certificate.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Certifications;
