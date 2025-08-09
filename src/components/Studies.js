import React from "react";
import FadeInSection from "./FadeInSection";
import JobList from "./StudiesList";
import "../styles/Studies.css";

function Academic() {
  return (
    <div id="academic">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ Etudies </span>
        </div>
        <JobList></JobList>
      </FadeInSection>
    </div>
  );
}

export default Academic;
