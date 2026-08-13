import React, { useEffect, useState } from "react";
import profile from "./pic/profile.jpg";

function New() {
  const words = [
    "Python Developer",
    "Full Stack Developer",
    "Problem Solver",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <section id="home" className="New">

      <div className="New-content">

        <p className="New-small">
          I'M
        </p>

        <h1>
          Janarthanan 
        </h1>

        <h2>
          {text}
          <i className="typing-cursor"></i>
        </h2>

        <p className="New-text">
          Enthusiastic and fast-learning Computer Science student
          skilled in Python, SQL and C#, with a strong interest in
          applying technology to real-world challenges.
        </p>

        <div className="New-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        <div className="New-contact">
          <a href="mailto:janarthanan1289@gmail.com">
            janarthanan1289@gmail.com
          </a>

          <span>•</span>

          <a href="tel:+918939126689">
            +91 8939126689
          </a>
        </div>

      </div>

      <div className="New-side">
        <span>CSE</span>
        <span>2023 — 2027</span>
      </div>

      <div className="New-photo">
        <img src={profile} alt="Janarthanan" />
      </div>

    </section>
  );
}

export default New;