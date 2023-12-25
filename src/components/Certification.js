import classes from "./Certification.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Certification() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
  return (
    <>
    <p className={classes.p}>Browse My Recent</p>
    <h1 className={classes.h1}>Certifications</h1>
    <div className={classes.slider}>
      <div className={classes.box}>
        <Slider {...settings}>
          {data.map((certificate) => (
            <div key={certificate.name} className={classes.certificate}>
              <div className={classes.image}>
                <img src={certificate.image} className={classes.img} />
              </div>
              <div className={classes.details}>
                <p>{certificate.name}</p>
                <p>{certificate.content}</p>
                <button className={classes.button}><a href={certificate.link}>Verify</a></button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
}

const data = [
  {
    name: "Python 100 Days of Code 2023",
    image: `/certificates/python.jpg`,
    content: "A personal blog website built with Flask Application. Used Bootstrap for styling and Flask module from Python.",
    link: "https://www.udemy.com/certificate/UC-87b50201-e397-4133-8b97-d2fac0aa9bcd/"
  },
  {
    name: "Complete Web Development BootCamp 2023",
    image: "/certificates/web-development.jpg",
    content: "Quiz Website (True/False) questions with Scores after Finish. Built with Nodejs.",
    link: "https://www.udemy.com/certificate/UC-af910072-fd6e-482d-9b7b-f3dc18f9a778/"
  },
  {
    name: "Machine Learning A-Z: AI, Python",
    image: "/certificates/machine-learning.jpg",
    content: "Learn english words through kannada. Built with tkinter graphics and python and words scrapped from web with Selenium.",
    link:"https://www.udemy.com/certificate/UC-88d21b46-9891-4aa1-b451-30fea22099df/"
  },
  {
    name: "React The Complete Guide(incl. React Router and Redux)",
    image: "/certificates/react-js.jpg",
    content: "Guess all the states of India. Can you guess all or will you miss some. Built in python with turtle grahics.",
    link:"https://www.udemy.com/certificate/UC-68d35d55-c7f9-4acc-bc2c-431fd18624ab/"
  }
];