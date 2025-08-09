
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import JobList from "./JobList";

function Experience() {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ Experience</span>
        </div>
        <JobList></JobList>
      </FadeInSection>
    </div>
  );
}

export default Experience;
