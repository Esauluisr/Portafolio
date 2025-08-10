import Navbar from "react-bootstrap/Navbar";
import EmailRounded from '@mui/icons-material/EmailRounded';
import GitHubIcon from "@mui/icons-material/GitHub";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../styles/NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div>
      <Navbar fixed="top" expand="md" className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="#" exportparts="ms-auto" className="d-flex align-items-center">
            <img
              src={require("../logosvg.svg").default}
              alt="Logo"
              width="30"
              height="30"
              className="me-2"
              style={{ borderRadius: "50%" }}
            />
            Esau Luis
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#academic">Etudies</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#cv">CV</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="mailto:esauluis117@gmail.com">
                <EmailRounded style={{ fontSize: 20 }}></EmailRounded>
              </Nav.Link>
              <Nav.Link href="https://github.com/Esauluisr" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link
                href="/"
                target="_blank"
              >
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
