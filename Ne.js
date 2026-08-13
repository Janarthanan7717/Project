import React, { useState } from "react";

function Ne() {
  const [open, setOpen] = useState(false);

  const links = [{ name: "Profile", path: "#profile" },{ name: "Skills", path: "#skills" },{ name: "Experience", path: "#experience" },{ name: "Projects", path: "#projects" },{ name: "Certificates", path: "#certifications" },{ name: "Education", path: "#education" },{ name: "Contact", path: "#contact" }];

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <a href="#home" className="nav-logo">JANARTHANAN S</a>
        <button className="menu-btn"onClick={() => setOpen(!open)}> {open ? "✕" : "☰"} </button>
        <div className={open ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <a href={link.path} key={link.name} onClick={() => setOpen(false)}>{link.name}</a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Ne;