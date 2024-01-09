import classes from "./Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[{
          breakpoint: 1360,
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
    <h1 className={classes.h1}>Projects</h1>
    <motion.div initial={{opacity:0, y:-60}} animate={{opacity:1, y:0}} className={classes.slider}>
      <div className={classes.box}>
        <Slider {...settings}>
          {data.map((project) => (
            <div key={project.name} className={classes.project}>
              <div className={classes.image}>
                <img src={project.image} className={classes.img} />
              </div>
              <div className={classes.details}>
                <p>{project.name}</p>
                <p>{project.content}</p>
                <button className={classes.button}><a href={project.url} target="_blank">Source Code</a></button>
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
    name: "All In One Website",
    image: `/projects/all-in-one.jpeg`,
    content: "A website based on API, where it can be used to learn, play. Built with Nodejs and Express js.",
    url:"https://github.com/Vijay093/All_In_One",
  },
  {
    name: "React Project Management",
    image: `/projects/project_managment.png`,
    content: "A basic react app to manage projects.",
    url:"",
  },
  {
    name: "Blog Website",
    image: `/projects/blog_website.png`,
    content: "A personal blog website built with Flask Application. Used Bootstrap for styling and Flask module from Python.",
    url: "https://github.com/Vijay093/PersonalBlogWebsite",
  },
  {
    name: "Quiz Website",
    image: "/projects/quiz_website1.png",
    content: "Quiz Website (True/False) questions with Scores after Finish. Built with Nodejs.",
    url:"https://github.com/Vijay093/Quiz-Website",
  },
  {
    name: "Learn English from Kannada Application",
    image: "/projects/kannada_english.png",
    content: "Learn english words through kannada. Built with tkinter graphics and python and words scrapped from web with Selenium.",
    url:"https://github.com/Vijay093/Learn_English_Through_Your_MotherTongue",
  },
  {
    name: "Guess the States",
    image: "/projects/india_states_game.png",
    content: "Guess all the states of India. Can you guess all or will you miss some. Built in python with turtle grahics.",
    url:"https://github.com/Vijay093/india-states-game",
  },
  {
    name: "Weather App",
    image: "/projects/weather_app.png",
    content: "Get Weather Information of all places in the world with just typing name of the city. Built in Nodejs.",
    url:"https://github.com/Vijay093/Weather-API-Website",
  },
  {
    name: "Articles API",
    image: "/projects/api.png",
    content: "Built an Restfull API from Scartch with Nodejs and MongoDB to store data, talk to the API with Postman or on localhost.",
    url:"https://github.com/Vijay093/RESTful-API-from-Scratch-Articles_DataBase",
  },
];
