import { useState } from "react";
import classes from "./Navbar.module.css";
import About from "./About";
import Certification from "./Certification";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Navbar() {
  const [content, setContent] = useState("introduction");

  const handleDownload = () => {
    const pdfUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let visible;
  if (content === "introduction") {
    visible = <Introduction />;
  } else if (content === "about") {
    visible = <About />;
  } else if (content === "skill") {
    visible = <Skills />;
  } else if (content === "portfolio") {
    visible = <Projects />;
  } else if (content === "certification") {
    visible = <Certification />;
  } else {
    visible = <Contact />;
  }
  return (
    <>
      <header className={classes.header}>
        <button
          onClick={() => {
            setContent("introduction");
          }}
          className={classes.button_text}
        >
          <h1 className={classes.nav_title}>Vijay Kumar M R</h1>
        </button>
        <nav>
          <ul>
            <li>
              <button onClick={handleDownload} className={classes.button}>
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setContent("about");
                }}
                className={classes.button_text}
              >
                <a>About</a>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setContent("portfolio");
                }}
                className={classes.button_text}
              >
                <a>Portfolio</a>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setContent("skill");
                }}
                className={classes.button_text}
              >
                <a>Skills</a>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setContent("certification");
                }}
                className={classes.button_text}
              >
                <a>Certifications</a>
              </button>
            </li>
            {/* <li>
            <a>Links</a>
            <ul className={classes.dropdown}>
              <li>
                <a href="#">Blog Website</a>
              </li>
              <li>
                <a href="#">All in One Website</a>
              </li>
              <li>
                <a href="#">Weather Application</a>
              </li>
              <li>
                <a href="#">Quiz Application</a>
              </li>
            </ul>
          </li> */}
            <li>
              <button
                onClick={() => {
                  setContent("contact");
                }}
                className={classes.button_text}
              >
                <a>Contact</a>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {visible}
    </>
  );
}
