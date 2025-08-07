import Typist from "react-typist";
import "../styles/intro.css";

function Intro() {

    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi,"}
            <span className="intro-name">{"Luis"}</span>
            {" here"}
          </span>
        </Typist>
      </div>
    );
}

export default Intro;