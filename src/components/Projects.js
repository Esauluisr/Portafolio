import "../styles/Projects.css"
import FadeInSection from "./FadeInSection";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import ExternalLinks from "./ExternalLinks";

function Projects() {
 
  const projects = {
    Medelink: {
      desc: "This web application uses an artificial intelligence model trained with dermatological images to detect possible cases of skin cancer.",
      techStack: "Python (Flask), Bootstrap, MSQL",
      link: "https://github.com/Esauluisr/Medelinkapp",
      open: "",
    },
    Cbtis: {
      desc: "This web application uses an artificial intelligence model trained with dermatological images to detect possible cases of skin cancer.",
      techStack: "Java, MSQL",
      link: "https://github.com/Esauluisr/Attendance-Control",
      open: "",
    },

    Portafolio: {
      desc: "This web application uses an artificial intelligence model trained with dermatological images to detect possible cases of skin cancer.",
      techStack: "React, MUI, CSS, BOOTSTRAP",
      link: "https://github.com/Esauluisr/Portafolio",
      open: "",
    },
  };

  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">/ projects</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon
                      style={{ fontSize: 35 }}
                    ></FolderOpenRoundedIcon>
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  ></ExternalLinks>
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;