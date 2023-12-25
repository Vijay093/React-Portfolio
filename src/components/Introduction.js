import classes from "./Introduction.module.css";
import ReactTyped from "react-typed";
import image from "../assets/vijay.jpg";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png"

export default function Introduction() {
  return (
    <div className={classes.div}>
      <div className={classes.intro}>
        <img src={image} alt="profile picture" />
        <h2>
          Hey I'm Vijay,<br /> {" "}
        </h2>
        <h2>
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
        <button className={classes.button}><a href="">LinkedIn</a></button>
        <button className={classes.button_text}><a href="">Go To Github</a></button>
        </div>

      </div>
    </div>
  );
}
