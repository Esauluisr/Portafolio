import React from "react";
import "../styles/About.css";

function about() {
  const one = (
    <p>
      I am currently a <b>Profesor </b>I have a degree in Computer Science and a
      passion for developing technological solutions that generate a positive
      impact. I'm motivated by contributing to projects that benefit society,
      especially through the creation of useful, accessible, and innovative
      applications. I love working on ideas that combine technology, artificial
      intelligence, and social good.
    </p>
  );
  const two = (
    <p>
      Outside of work, I'm interested in following the developments of science.
    </p>
  );

  const tech_stack = [
    "Python",
    "React",
    "Java",
    "Javascript ES6+"
  ];
  return (
    <div className="about-container">
      <div id="about">
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {[one]}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {tech_stack.map(function (tech_item, i) {
                return (
                  <li key={i} className="tech-item">
                    {tech_item}
                  </li>
                );
              })}
            </ul>
            {[two]}
          </div>
          <div className="about-image">
            <img alt="EsaLuisR" src={"/assets/Foto.png"} />
          </div>
        </div>
      </div>
    </div>
  );
} 

export default about;

