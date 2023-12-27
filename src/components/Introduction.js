import classes from "./Introduction.module.css";
import ReactTyped from "react-typed";
import image from "../assets/vijay.jpg";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { motion } from "framer-motion";

export default function Introduction() {
  const handleDownload = () => {
    const pdfUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={classes.div}>
      <motion.div className={classes.intro}>
        <motion.img initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} src={image} alt="profile picture" />
        <motion.p initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}}>Hello, I'm</motion.p>
        <motion.h2 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} className={classes.name}>
          Vijay Kumar M R
          <br />{" "}
        </motion.h2>
        <motion.h2 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}}>
          <ReactTyped
            strings={["Full Stack Web Developer", "Python Developer"]}
            typeSpeed={50}
            loop
            backSpeed={20}
            cursorChar=">"
            showCursor={true}
            className={classes.dynamicTyping}
          />
            Full Stack Web Developer
        </motion.h2>
        <motion.div initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} className={classes.buttons}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            className={classes.button}
            onClick={handleDownload}
          >
            <a>Download CV</a>
          </motion.button>
          <button className={classes.button_text}>
            <a
              href="https://github.com/Vijay093?tab=repositories"
              target="_blank"
            >
              Go to Github
            </a>
          </button>
        </motion.div>
        <motion.div initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} className={classes.socials}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            src={linkedin}
            alt="linkedin profile"
            className={classes.icon}
            onClick="location.href='https://www.linkedin.com/in/vijay-m-r-424b8818a/'"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            src={github}
            alt="github profile"
            className={classes.icon}
            onClick="location.href='mailto:vijay.rathnappa42@gmail.com'"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            src={email}
            alt="email profile"
            className={classes.icon}
            onClick="location.href='https://github.com/Vijay093?tab=repositories'"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
