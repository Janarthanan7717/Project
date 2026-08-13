import React, { useState } from "react";

function Con() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function changeHandler(event) {
    setForm({...form,[event.target.name]: event.target.value});
  }

  function submitHandler(event) {
    event.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact - " + form.name);
    const body = encodeURIComponent("Name: " + form.name + "\nEmail: " + form.email + "\n\nMessage:\n" + form.message);
    window.location.href ="mailto:janarthanan1289@gmail.com" + "?subject=" + subject + "&body=" + body;
}

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <span>07</span>
        <h2>Let's Connect</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-left">
          <h3>Have an opportunity?</h3>
          <p>
            I'm eager to contribute my technical skills
            to real-world challenges.
          </p>
          <div className="contact-details">
            <a href="mailto:janarthanan1289@gmail.com">janarthanan1289@gmail.com</a>
            <a href="tel:+918939126689">+91 8939126689</a>
            <a href="https://linkedin.com/in/janarthanan-sivakumar" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <div className="languages">
            <span>Languages</span>
            <strong>English • Tamil</strong>
          </div>
        </div>
        <form className="contact-form" onSubmit={submitHandler}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={changeHandler} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={changeHandler} required/>
          <textarea name="message" placeholder="Your Message" rows="6" value={form.message} onChange={changeHandler} required/>
          <button type="submit" className="btn btn-primary">SEND MESSAGE →</button>
        </form>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Janarthanan S</p>
        <p>Computer Science & Engineering</p>
      </footer>
    </section>
  );
}
export default Con;
