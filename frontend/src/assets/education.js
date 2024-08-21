// src/assets/education.js

import uofu from "../assets/images/UofU.png";
import fiap from "../assets/images/fiap.png";
import ung from "../assets/images/ung.png";

const education = [
  {
    id: 1,
    title: "University of Utah",
    degree: "BootCamp",
    description: "Full Stack Web Developer",
    Local: "Utah - United States",
    imgSrc: uofu, // Replace with actual image path
    dateFrom: "February 2024", // Example date
    dateEnd: "August 2024", // Example date
  },
  {
    id: 2,
    title: "Faculdade de Informatica e Administracao Paulista",
    degree: "MBA",
    description: "Project Management PMI",
    Local: "Sao Paulo - Brazil",
    imgSrc: fiap, // Replace with actual image path
    dateFrom: "September 2012", // Example date
    dateEnd: "September 2013", // Example date
  },
  {
    id: 3,
    title: "Universidade de Guarulhos",
    degree: "Bachelor's",
    description: "Computer Science",
    Local: "Sao Paulo - Brazil",
    imgSrc: ung, // Replace with actual image path
    dateFrom: "February 2003", // Example date
    dateEnd: "July 2007", // Example date
  },
];

export default education;
