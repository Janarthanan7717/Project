import React, { useState } from "react";

const proj= [
  {
    id: "01",
    title: "Face Recognition Project",
    technology: "C# / .NET",
    description:
      "A face recognition application developed using C# and .NET to detect and identify registered faces from images or a live camera feed.",
    technologies: [
      "C#",
      ".NET",
      "Image Processing",
      "Face Recognition"
    ],
    details: [
      "Implemented face detection and recognition.",
      "Compared captured facial features with stored user data.",
      "Designed a user interface for face registration.",
      "Implemented image capture and identity verification.",
      "Improved recognition accuracy for different facial positions and lighting conditions.",
      "Can be used for attendance management, authentication and access control."
    ]
  },
  {
    id: "02",
    title: "AI-Driven Financial Sentiment Analysis for Stock Price Prediction",
    technology: "Python / AI / ML",
    description:
      "An AI-based stock price prediction system using Python, NLP and Machine Learning.",
    technologies: [
      "Python",
      "NLP",
      "FinBERT",
      "Pandas",
      "NumPy",
      "XGBoost"
    ],
    details: [
      "Collected historical stock price data.",
      "Collected financial discussions from Twitter and Reddit.",
      "Used Pandas and NumPy for data cleaning and preprocessing.",
      "Performed feature engineering.",
      "Applied FinBERT for sentiment analysis.",
      "Classified financial text as positive, negative or neutral.",
      "Combined historical stock features with sentiment scores.",
      "Trained an XGBoost model for stock price prediction.",
      "Built an automated Python pipeline.",
      "Evaluated the model using RMSE and R²."
    ]
  },
  {
    id: "03",
    title: "Automated Website Uptime Monitoring and Email Alert System",
    technology: "Python / Automation",
    description:
      "An automated Python system that continuously monitors website availability and sends email alerts when website status changes.",
    technologies: [
      "Python",
      "Excel",
      "Email",
      "Automation"
    ],
    details: [
      "Read website names and URLs from an Excel file.",
      "Automatically monitored multiple websites.",
      "Determined whether each website was UP or DOWN.",
      "Implemented automated email notifications.",
      "Sent status alerts to configured users.",
      "Automated monitoring every 10 minutes.",
      "Configured email recipients and notification settings.",
      "Supported multiple websites from a single Excel file."
    ]
  }
];

function Proj() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section dark-section">

      <div className="section-heading">
        <span>04</span>
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {proj.map((project) => (
          <article className="project" key={project.id}>
            <div className="project-index">
              {project.id}
            </div>
            <div className="project-content">
              <span className="project-tech">
                {project.technology}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <button className="project-button" onClick={() => setSelected(project)}>VIEW PROJECT DETAILS → </button>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <div className="project-modal" onClick={() => setSelected(null)}>
          <div className="project-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>x</button>
            <span className="project-tech">{selected.technology}
            </span>
            <h3>{selected.title}</h3>
            <ul>{selected.details.map((detail) => (<li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
export default Proj;
