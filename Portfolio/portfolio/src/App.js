import Navbar from "./components/navbar.js";
import Intro from "./components/intro.js";
import Skills from "./components/skills.js";
import Contact from "./components/contactme.js";
import Projects from "./components/Projects.js";
import Footer from "./components/footer.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
