import KasualImg from "../assets/images/logo-kasual.jpeg";
import starline from "../assets/images/fitlift.png";
import forecast from "../assets/images/forecast.jpg";
import payroll from "../assets/images/payroll.png";
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
    title: "Tech-Blog",
    description:
      "Developed a CMS-style blog site like to WordPress, allowing developers to publish and comment on posts. Built from scratch and deployed to Render, this app employs the MVC architecture with Handlebars.js for templating, Sequelize for ORM, and express-session for authentication.",
    imgSrc: techblog, // Replace with actual image path
    githubLink: "https://github.com/jlcastro1877/Tech-blog", // Replace with actual GitHub URL
    webpageLink: "https://tech-blog-dkm9.onrender.com/", // Replace with actual project webpage URL
  },
  {
    id: 4,
    title: "Forecast Weather App",
    description:
      "An app that provides real-time weather forecasts and updates using a third-party API. It delivers accurate temperature, conditions, and forecasts to keep users informed.",
    imgSrc: forecast, // Replace with actual image path
    githubLink: "https://github.com/jlcastro1877/weather_forecast", // Replace with actual GitHub URL
    webpageLink: "https://jlcastro1877.github.io/weather_forecast/", // Replace with actual project webpage URL
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "My portfolio features diverse web development projects, including full-stack apps and CMS-style blogs. It highlights my skills in React, Bootstrap, and various backend technologies. Showcased projects include real-time weather apps, e-commerce platforms, and interactive blogs. Explore how I combine innovation with practical solutions in my work.",
    imgSrc: Portfolio, // Replace with actual image path
    githubLink: "https://github.com/jlcastro1877/my_portfolio", // Replace with actual GitHub URL
    webpageLink: "https://jlcastro1877.github.io/payRoll/", // Replace with actual project webpage URL
  },

  // Add more projects as needed
];

export default projects;
