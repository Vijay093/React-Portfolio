import classes from './Contact.module.css';
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png"

export default function Contact() {
    return (
        <div className={classes.contact}>
        <p className={classes.p}>Get In Touch</p>
        <h1 className={classes.heading}>Contact Me</h1>
        <div className={classes.contactUpperContainer}>
            <div className={classes.contactContainer}>
                <img src={email} alt="mail-icon" className={classes.icon} />
                <p><a href="mailto:vijay.rathnappa42@gmail.com">Vijay.rathnappa42@gmail.com</a></p>
            </div>
            <div className={classes.contactContainer}>
                <img src={linkedin} alt="linkedin-icon" className={classes.icon} />
                <p><a href="https://www.linkedin.com/in/vijay-m-r-424b8818a/">Linkedin</a></p>
            </div>
        </div>
        </div>
    );
}