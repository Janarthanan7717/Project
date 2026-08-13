import React from "react";

function Profile() {
  return (
    <section id="profile" className="section profile-section">
      <div className="section-heading">
        <span>01</span>
        <h2>Profile</h2>
      </div>
      <div className="profile-grid">
        <div className="profile-title">
          <h3>
            Developer
            <br />
            & Problem Solver
          </h3>
        </div>
        <div className="profile-description">
          <p>
            Enthusiastic and fast-learning graduate with a solid
            foundation in Computer Science and Engineering.
          </p>
          <p>
            Skilled in Python, SQL and C# with a strong interest
            in applying knowledge to real-world challenges.
          </p>
          <p>
            Known for being a proactive team player, quick problem
            solver, and eager to contribute value in a dynamic
            work environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
