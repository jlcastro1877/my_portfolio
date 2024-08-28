import lds from "../assets/images/lds_lg.jpeg";
import apiary from "../assets/images/apiary.png";

const experienceData = [
  {
    id: 1,
    company: "The Church of Jesus Christ of LATTER-DAY SAINTS",
    title: "QA Engineer",
    dateFrom: "February 2022",
    dateEnd: "Present",
    Local: "Riverton - Utah",
    description: `
      <p>As a Quality Assurance Engineer at The Church of Jesus Christ of Latter-day Saints, I was responsible for testing user interfaces and RESTful APIs to ensure their functionality and performance.</p>
      <p>I collaborated with developers working on React applications to troubleshoot and resolve issues.</p>
      <p>I also created detailed use cases and test plans and employed DevOps practices to streamline the testing and deployment processes.</p>
    `,
    imgSrc: lds,
  },
  {
    id: 2,
    company: "Apiary Investment Fund",
    title: "Fullstack Developer ",
    dateFrom: "March 2018",
    dateEnd: "February 2022",
    Local: "Lindon - Utah",
    description: `
      <ul>
        <li><strong>Maintained and Enhanced Web Pages:</strong> Regularly updated and maintained the company’s web pages to ensure functionality and performance, fixing bugs and addressing user-reported issues.</li>
        <li><strong>Developed New Features:</strong> Designed and implemented new features using React, CSS, and HTML, contributing to an improved user experience and increased user engagement.</li>
        <li><strong>Participated in Page Redesign Project:</strong> Actively involved in a major project to rebuild the company’s web page, collaborating with the team to re-architect the application with modern technologies and best practices.</li>
        <li><strong>Implemented User Authentication:</strong> Integrated user authentication and authorization using JWT (JSON Web Tokens) to enhance security and manage user sessions effectively.</li>
        <li><strong>Managed Database Operations:</strong> Utilized MongoDB for data management, ensuring efficient data storage and retrieval, and integrating it with the application backend.</li>
        <li><strong>Created User Profiles:</strong> Developed user profile functionality, allowing users to create, view, and edit their profiles, enhancing personalization and user satisfaction.</li>
      </ul>

    `,
    imgSrc: apiary,
  },
];

export default experienceData;
