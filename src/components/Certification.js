import classes from "./Certification.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function Certification() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[{
          breakpoint: 1024,
          settings:{
            vertical: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
    }
  return (
    <>
    <p className={classes.p}>Browse My Recent</p>
    <h1 className={classes.h1}>Certifications</h1>
    <motion.div initial={{opacity:0, y:-60}} animate={{opacity:1, y:0}} className={classes.slider}>
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
                <button className={classes.button}><a href={certificate.link} target="_blank">Verify</a></button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
    </>
  );
}

const data = [
  {
    name: "Python 100 Days of Code 2023",
    image: `/certificates/python.jpg`,
    content: "Instructor: Dr. Angela Yu",
    link: "https://www.udemy.com/certificate/UC-87b50201-e397-4133-8b97-d2fac0aa9bcd/"
  },
  {
    name: "Complete Web Development BootCamp 2023",
    image: "/certificates/web-development.jpg",
    content: "Instructor: Dr. Angela Yu",
    link: "https://www.udemy.com/certificate/UC-af910072-fd6e-482d-9b7b-f3dc18f9a778/"
  },
  {
    name: "Machine Learning A-Z: AI, Python",
    image: "/certificates/machine-learning.jpg",
    content: "Instructors: Kirill Eremenko, Hadelin de Ponta]eves and SuperDataScience Team",
    link:"https://www.udemy.com/certificate/UC-88d21b46-9891-4aa1-b451-30fea22099df/"
  },
  {
    name: "React The Complete Guide(incl. React Router and Redux)",
    image: "/certificates/react-js.jpg",
    content: "Instructors: Maximilian Schwarzmuller",
    link:"https://www.udemy.com/certificate/UC-68d35d55-c7f9-4acc-bc2c-431fd18624ab/"
  }
];