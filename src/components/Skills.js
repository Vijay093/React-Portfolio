import classes from "./Skills.module.css";
import check from "../assets/check.png";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <>
    <div>
      <div className={classes.container}>
        <p className={classes.p}>Explore My</p>
        <h1 className={classes.heading}>Skillsets</h1>
      </div>
      <motion.div initial={{opacity:0, y:-60}} animate={{opacity:1, y:0}} className={classes.skillsContainer}>
        <div className={classes.compartment}>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>React js</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>Python</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>C</h3>
                <p>Basic</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>Node js</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>HTML and CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>Javascript</h3>
                <p>Intermediate</p>
              </div>
            </article>
        </div>
        <div className={classes.compartment}>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>Computer Networks</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>Operating Systems</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>Machine Learning</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>Data Analysis</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>SQL</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className={classes.skill}>
              <img src={check} alt="tick-mark" className={classes.icon} />
              <div>
                <h3>Data Strcutures</h3>
                <p>Basic</p>
              </div>
            </article>
        </div>
        {/* <div className={classes.compartment}></div>
        <div className={classes.compartment}></div> */}
      </motion.div>
      </div>
    </>
  );
}
