import classes from "./Introduction.module.css";
import ReactTyped from "react-typed";
import image from "../assets/vijay.jpg";

export default function Introduction() {
  return (
    <div className={classes.div}>
      <div className={classes.intro}>
        <img src={image} alt="profile picture" />
        <div className={classes.info}>
        <h2>
          Hey I Am Vijay, {" "}
          <ReactTyped
            strings={[
              "I am a Full Stack Web Developer.",
              "I am a Python Developer.",
            ]}
            typeSpeed={50}
            loop
            backSpeed={20}
            cursorChar=">"
            showCursor={true}
          />
        </h2>
        <div className={classes.buttons}>
        <button className={classes.button}>Contact Me</button>
        <button className={classes.button_text}>Go To Github</button>
        </div>
        </div>
      </div>
    </div>
  );
}
