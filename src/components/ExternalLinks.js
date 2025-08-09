import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

function ExternalLinks({ githubLink, openLink }) {
  return (
    <div className="external-links">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      )}
      {openLink && (
        <a href={openLink} target="_blank" rel="noopener noreferrer">
          <OpenInBrowserIcon />
        </a>
      )}
    </div>
  );
}

export default ExternalLinks;