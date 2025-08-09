import FadeInSection from "./FadeInSection";
import CvFormato from "./CvFormato";

function CV() {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/Cv </span>
        </div>
        <CvFormato></CvFormato>
      </FadeInSection>
    </div>
  );
}

export default CV;
