import Typist from "react-typist";
import "../styles/Home.css";
import "react-typist/dist/Typist.css";
import EmailIcon from '@mui/icons-material/Email';

function Intro() {
  return (
    <div id="Home">
      <Typist avgTypingDelay={120}>
        <span className="intro-title">
          {"Hello,"}
          <span className="intro-name">{"welcome"}</span>
        </span>
      </Typist>
      <div className="intro-desc">
        I have a degree in Computer Science ,I have a passion for creating
        innovative software solutions that drive business growth and improve
        user experiences. With a strong foundation in programming languages and
        frameworks, I am constantly seeking opportunities to expand my skills
        and stay up-to-date with the latest trends in the tech industry.
      </div>
      <a href="mailto:esauluis117@gmail.com" className="intro-contact">
        <EmailIcon />
        {" EsauLuis"}
      </a>
    </div>
  );
}

export default Intro;
