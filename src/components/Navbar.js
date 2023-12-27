import { useState } from "react";
import classes from "./Navbar.module.css";
import About from "./About";
import Certification from "./Certification";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";
import hamburger from "../assets/hamburger.png";
import { motion } from "framer-motion";

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
    <div>
      <header className={classes.header}>
        <button
          onClick={() => {
            setContent("introduction");
          }}
          className={classes.button_text}
        >
          <h1 className={classes.nav_title}>Vijay Kumar M R</h1>
        </button>
        <input
          type="checkbox"
          id="hamburger"
          className={classes.inputForHamburger}
        ></input>
        <label htmlFor="hamburger">
          <img src={hamburger} />
        </label>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                onClick={handleDownload}
                className={classes.button}
              >
                <a>Resume</a>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                onClick={() => {
                  setContent("about");
                }}
                className={classes.button_text}
              >
                <a>About</a>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                onClick={() => {
                  setContent("portfolio");
                }}
                className={classes.button_text}
              >
                <a>Portfolio</a>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                onClick={() => {
                  setContent("skill");
                }}
                className={classes.button_text}
              >
                <a>Skills</a>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                onClick={() => {
                  setContent("certification");
                }}
                className={classes.button_text}
              >
                <a>Certifications</a>
              </motion.button>
            </li>
            <li className={classes.dropDown}>
              <motion.button>
                <a>Links</a>
              </motion.button>
              <ul>
                <li>
                  <button>
                    <a href="https://vijay-blog.onrender.com/" target="_blank">
                      Blog Website
                    </a>
                  </button>
                </li>
                <li>
                  <button>
                    <a
                      href="https://all-in-one-v83r.onrender.com/"
                      target="_blank"
                    >
                      All in One Website
                    </a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href="#" target="_blank">
                      Weather Application
                    </a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href="https://quiz-j96q.onrender.com/" target="_blank">
                      Quiz Application
                    </a>
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                onClick={() => {
                  setContent("contact");
                }}
                className={classes.button_text}
              >
                <a>Contact</a>
              </motion.button>
            </li>
          </ul>
        </nav>
      </header>
      {visible}
    </div>
  );
}
