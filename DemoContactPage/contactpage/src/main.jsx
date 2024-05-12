import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "../src/components/contact.jsx";
import Footer from "../src/components/footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contact />
    <Footer />
  </React.StrictMode>
);
