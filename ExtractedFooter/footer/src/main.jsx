import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/aboutauthor.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <About />
    <Contact />
    <Footer />
  </React.StrictMode>
);
