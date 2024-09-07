import KasualImg from "../assets/images/logo-kasual.jpeg";
import starline from "../assets/images/fitlift.png";
import forecast from "../assets/images/forecast.jpg";
import Portfolio from "../assets/images/portfolio.png";
import techblog from "../assets/images/Tech-Blog-making.png";

const projects = [
  {
    id: 1,
    title: "Kasual Tricot",
    description:
      "A comprehensive e-commerce platform designed for fashion retail. Features include a user-friendly interface, secure payment processing, and a dynamic product catalog that showcases a variety of clothing options.",
    imgSrc: KasualImg, // Replace with actual image path
    githubLink: "https://github.com/jlcastro1877/Kasual-tricot-store", // Replace with actual GitHub URL
    webpageLink: "https://kasual-tricot.onrender.com/", // Replace with actual project webpage URL
  },
  {
    id: 2,
    title: "Start-Line",
    description:
      "This project helps newcomers to fitness by offering a user-friendly platform with resources and guidance. It aims to make starting a fitness journey easier and more confident.",
    imgSrc: starline, // Replace with actual image path
    githubLink: "https://github.com/gonz951/Start-Line", // Replace with actual GitHub URL
    webpageLink: "https://gonz951.github.io/Start-Line/", // Replace with actual project webpage URL
  },
  {
    id: 3,
    title: "Forecast Weather App",
    description:
      "An app that provides real-time weather forecasts and updates using a third-party API. It delivers accurate temperature, conditions, and forecasts to keep users informed.",
    imgSrc: forecast, // Replace with actual image path
    githubLink: "https://github.com/jlcastro1877/weather_forecast", // Replace with actual GitHub URL
    webpageLink: "https://jlcastro1877.github.io/weather_forecast/", // Replace with actual project webpage URL
  },

  // Add more projects as needed
];

export default projects;
