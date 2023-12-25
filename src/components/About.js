import classes from "./About.module.css";
import profile from "../assets/profile.jpeg";
import experience from "../assets/experience.png";
import education from "../assets/education.png";

export default function About() {
  return (
    <div className={classes.section}>
      <p className={classes.p}>Get To Know More</p>
      <h1 className={classes.h1}>About Me</h1>
      <div className={classes.mainContainer}>
        <div className={classes.picContainer}>
          <img src={profile} alt="profile-pic" className={classes.aboutPic} />
        </div>
        <div className={classes.aboutDetailsContainer}>
          <div className={classes.aboutContainers}>
            <div className={classes.detailsContainer}>
              <img className={classes.icon} src={experience} />
              <h3>Experience</h3>
              <p>6 Months<br />Schnieder Digital at Schnieder Electric </p>
              <p>Recruited as Deputy Engineer <br /> Bharat Electronics Limited</p>
            </div>
            <div className={classes.detailsContainer}>
              <img className={classes.icon} src={education} />
              <h3>Education</h3>
              <p>B.Tech <br /> Computer Science and Engineering <br /> PES University, Bengaluru <br /> 7.69 CGPA </p>
            </div>
          </div>
          <div className={classes.textContainer}>
            <p className={classes.p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
