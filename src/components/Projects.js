import classes from "./Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
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
    <h1 className={classes.h1}>Projects</h1>
    <div className={classes.slider}>
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
                <button className={classes.button}>Source Code</button>
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
    name: "Blog Website",
    image: `/projects/blog_website.png`,
    content: "A personal blog website built with Flask Application. Used Bootstrap for styling and Flask module from Python.",
  },
  {
    name: "Quiz Website",
    image: "/projects/quiz_website1.png",
    content: "Quiz Website (True/False) questions with Scores after Finish. Built with Nodejs.",
  },
  {
    name: "Learn English from Kannada Application",
    image: "/projects/kannada_english.png",
    content: "Learn english words through kannada. Built with tkinter graphics and python and words scrapped from web with Selenium.",
  },
  {
    name: "Guess the States",
    image: "/projects/india_states_game.png",
    content: "Guess all the states of India. Can you guess all or will you miss some. Built in python with turtle grahics.",
  },
  {
    name: "Weather App",
    image: "/projects/weather_app.png",
    content: "Get Weather Information of all places in the world with just typing name of the city. Built in Nodejs.",
  },
  {
    name: "Articles API",
    image: "/projects/api.png",
    content: "Built an Restfull API from Scartch with Nodejs and MongoDB to store data, talk to the API with Postman or on localhost.",
  },
];
