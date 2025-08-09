import './App.css';
import Home from "./components/Home";
import NavBar from './components/NavBar';
import About from "./components/About";
import Studies from "./components/Studies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Footer from "./components/Footer"
import "./styles/Global.css"
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Home />
        <About />
        <Studies />
        <Experience />
        <Projects />
        <CV/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
