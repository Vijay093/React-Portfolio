import classes from "./About.module.css";
import profile from "../assets/profile.jpeg";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className={classes.section}>
      <p className={classes.p}>Get To Know More</p>
      <h1 className={classes.h1}>About Me</h1>
      <motion.div initial={{opacity:0, y:-60}} animate={{opacity:1, y:0}} className={classes.mainContainer}>
        <div className={classes.picContainer}>
          <img src={profile} alt="profile-pic" className={classes.aboutPic} />
        </div>
        <div className={classes.aboutDetailsContainer}>
          <div className={classes.aboutContainers}>
            <div className={classes.detailsContainer}>
              <img className={classes.icon} src={experience} />
              <h3>Experience</h3>
              <p>
                6 Months
                <br />
                Schnieder Digital at Schnieder Electric{" "}
              </p>
              <p>
                Recruited as Deputy Engineer <br /> Bharat Electronics Limited
              </p>
            </div>
            <div className={classes.detailsContainer}>
              <img className={classes.icon} src={education} />
              <h3>Education</h3>
              <p>
                B.Tech <br /> Computer Science and Engineering <br /> PES
                University, Bengaluru <br /> 7.69 CGPA{" "}
              </p>
            </div>
          </div>
          <div className={classes.textContainer}>
            <p>
              I'm into <b>Full Stack Web Development</b> and <b>Python Programming</b>. I
              graduated from <b>PES University, Bengaluru</b> as a <b>Computer Science
              Engineer</b> in <b>2022</b>. I interned at <b>Schnieder Electric</b> for <b>6 months</b>,
              where I had hands on experience with <b>VBA and Macros</b> to maintain
              GSC Data. Collaborated with QA Team to do <b>Unit Testing</b> For a New
              Website.
              <br /><br />
              Developed websites with a wide range of <b>front-end</b> and <b>back-end
              skills</b> like <b>React js, HTML, CSS, Python, JavaScript, Node js,
              Bootstrap</b> etc.
              <br /><br />
              Looking to further enhance my skill set with <b>React js</b> and as a
              future <b>Full Stack Web Developer</b>. My Greatest Achievement till date
              was being selected as a <b>Deputy Engineer</b> to work for <b>Bharat
              Electronics Limited</b>.
              <br /><br />
              I spend my leisure time either playing or watching <b>cricket,
              combat sports and motorsports</b>. I am into all kind of <b>Air Crash
              Investigations</b>.
            </p>
          </div>
          {/* <div className={classes.links}>
            <button className={classes.button}>Download My CV</button>
            <button className={classes.button}>Visit My Github</button>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}
