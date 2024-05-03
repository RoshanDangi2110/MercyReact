import Navbar from "./components/navbar.js";
import Intro from "./components/intro.js";
import Skills from "./components/skills.js";
import Projects from "./components/Projects.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
