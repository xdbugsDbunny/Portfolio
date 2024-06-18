import cornar from "../assets/cornar.png";
import rentv from "../assets/rentv.png";
import tech from "../assets/tech.png";
import goCornar from "../assets/goCornar.png";
import flipkart from "../assets/flipkart.png";
import apple from "../assets/apple.webp";
import sundown from "../assets/sundown.webp";
import portfolio from "../assets/portfolio.png"

// REACT ICONS
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";

export const work = [
  {
    name: "Cornars",
    img: cornar,
    lineOne:
      "Played a pivotal role in enhancing the user experience of the main website, Cornars. ",
    lineTwo:
      "Focused on responsive design using React to ensure a seamless and visually appealing experience on various devices.",
    lineThree:
      "Initiated the development of a dedicated child website, GoCornars, showcasing the ability to create distinct and complementary web assets.",
    link: "https://cornars.com/home",
    frontBgColor: "#e0e0e0",
    textColor: "#333333",
    nameColor: "#800080",
    backBgColor: "#e0e0e0",
    headingColor: "#654321",
    buttonColor: "#ffffff",
  },
  {
    name: "Rent Vahan",
    img: rentv,
    lineOne:
      "Created and enhanced the Rent Vahan website using ReactJS and MUI for the front end.",
    lineTwo: "Developed new APIs in NodeJS for backend functionality.",
    lineThree:
      "Collaborated on fixing bugs and implementing client requirements within an existing codebase.",
    link: "https://www.rentvahan.com/",
    frontBgColor: "#f5deb3",
    textColor: "#2b1d0e",
    nameColor: "#fd7e14",
    backBgColor: "#d2b48c",
    headingColor: "#004085",
    buttonColor: "#f5deb3",
  },
  {
    name: "TechColckers",
    img: tech,
    lineOne:
      "Designed and implemented a responsive website using React and Material-UI (MUI).",
    lineTwo:
      "Focused on creating an engaging user interface that seamlessly adapts to various devices.",
    lineThree:
      " Ensured a consistent and enjoyable user experience across different platforms.",
    link: "https://www.techclockers.com/",
    frontBgColor: "#add8e6",
    textColor: "#000080",
    nameColor: "#007bff",
    backBgColor: "#b0c4de",
    headingColor: "#006400",
    buttonColor: "#add8e6",
  },
  {
    name: "GoCornar",
    img: goCornar,
    lineOne:
      "Developed a website using React and Material-UI (MUI), ensuring a seamless user experience.",
    lineTwo:
      "The website is optimized for desktop use, prioritizing performance and functionality.",
    lineThree:
      "Additionally, designed and implemented APIs in Node.js to support mobile versions, enhancing accessibility and cross-platform compatibility.",
    link: "https://go.cornars.com/home",
    frontBgColor: "#90ee90",
    textColor: "#006400",
    nameColor: "#28a745",
    backBgColor: "#98fb98",
    headingColor: "#4b0082",
    buttonColor: "#90ee90",
  },
];

export const projects = [
  {
    pName: "Flipkart",
    img: flipkart,
    gitLink: "",
    side: "left",
    css: "absolute flex left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-[#c2e24b] z-[9] font-['Poppins'] leading-none tracking-tighter text-[6vw] overflow-hidden",
    bg:'#BEBEBF'
  },
  {
    pName: "Sundown",
    img: sundown,
    gitLink: "",
    side: "right",
    css: "absolute flex right-full translate-x-1/2  -translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-[#c2e24b] z-[9] font-['Poppins'] leading-none tracking-tighter text-[6vw] overflow-hidden",
    bg:'#19181E'
  },
  {
    pName: "Portfolio",
    img: portfolio,
    gitLink: "",
    side: "left",
    css: "absolute flex  left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-[#c2e24b] z-[9] font-['Poppins'] leading-none tracking-tighter text-[6vw] overflow-hidden",
    bg:'#19181E'
  },
  {
    pName: "Apple",
    img: apple,
    gitLink: "",
    side: "right",
    css: "absolute flex right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-[#c2e24b] z-[9] font-['Poppins'] leading-none tracking-tighter text-[6vw] overflow-hidden",
    bg:"#BEBEBF"
  },
];

export const skillsData = [
  {
    category: "Markup / Styling Language",
    technologies: [
      { name: "HTML", icon: AiFillHtml5, color: "#ED653B" },
      { name: "CSS", icon: FaCss3Alt, color: "#5DADE2" },
    ],
  },
  {
    category: "CSS Framework",
    technologies: [
      { name: "Bootstrap", icon: FaBootstrap, color: "#7912F6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Mui", icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    category: "Front-end Language",
    technologies: [
      { name: "Javascript", icon: IoLogoJavascript, color: "#D4B830" },
    ],
  },
  {
    category: "Front-end",
    technologies: [{ name: "React Js", icon: FaReact, color: "#38BDF8" }],
  },
  {
    category: "Package Manager",
    technologies: [{ name: "NPM", icon: FaNpm, color: "#CB0000" }],
  },
  {
    category: "Database Management",
    technologies: [
      { name: "MySql", icon: SiMysql, color: "#3E6E93" },
      { name: "MongoDb", icon: SiMongodb, color: "#82E0AA" },
    ],
  },
  {
    category: "Version Control",
    technologies: [
      { name: "Git and Github", icon: FaGitAlt, color: "#F14E32" },
    ],
  },
  {
    category: "Back-end",
    technologies: [{ name: "Node.js", icon: FaNode, color: "#56A645" }],
  },
  {
    category: "Other Language",
    technologies: [{ name: "Python", icon: FaPython, color: "#3E6E93" }],
  },
];

export const Schools = [
  {
    icon: FaSchool,
    class: "Class - 10",
    year: "2013",
    schoolName: "Army Public School, Clement Town",
    marks: "CGPA 7.2/10",
  },
  {
    icon: BiSolidSchool,
    class: "Class - 12",
    year: "2015",
    schoolName: "St. Kabeer Academy, Dehradun",
    marks: "Percentage - 56%",
  },
  {
    icon: FaUserGraduate,
    class: "Bachelor of Computer Applications",
    year: "2015-2018",
    schoolName: "Institute of Technology and Management - [ITM], Dehradun",
    marks: "CGPA - 6.0/10",
  },
  {
    icon: FaUserGraduate,
    class: "Master of Science in Information Technology",
    year: "2020-2022",
    schoolName: "Institute of Technology and Management - [ITM], Dehradun",
    marks: "CGPA - 7.4/10",
  },
];

export const SoftSkills = [
  {
    name: "Interpersonal Skills:",
    para: "Builds strong relationships with colleagues, clients, and stakeholders through effective communication and empathy, fostering collaboration.",
  },
  {
    name: "Communication Abilities: ",
    para: "Conveys complex ideas and technical concepts clearly, facilitating alignment across diverse teams and stakeholders.",
  },
  {
    name: "Teamwork:",
    para: "Actively contributes to team projects, valuing diverse perspectives, and promoting trust and mutual respect.",
  },
  {
    name: "Problem-solving: ",
    para: "Identifies and analyzes complex problems, develops innovative solutions, and overcomes obstacles with creativity and critical thinking.",
  },
  {
    name: "Adaptability: ",
    para: "Adapts to changing environments, adjusts priorities and strategies to meet evolving needs, and maintains resilience under pressure.",
  },
  {
    name: "Time Management:",
    para: "Effectively prioritizes tasks, meets deadlines, and optimizes productivity, ensuring efficient use of resources.",
  },
  {
    name: "Leadership Qualities:",
    para: "Exhibits integrity, accountability, and initiative, inspiring others to achieve excellence and driving positive change.",
  },
];

export const ExpPoints = [
  {
    name: "Collaborated on Cross-Functional Teams & Implemented Responsive Design Principles:",
    para: "Worked closely with designers, developers, and project managers to deliver high-quality front-end projects, fostering collaboration and communication. Ensured that front-end projects were responsive and optimized for various devices and screen sizes, enhancing user experience and accessibility.",
  },
  {
    name: "Utilized Material-UI for Design Consistency: ",
    para: "Leveraged Material-UI components and design system to maintain consistency and streamline the development process across different projects, improving efficiency and code maintainability.",
  },
  {
    name: "Optimized Database Performance:",
    para: "Applied best practices to optimize SQL database performance, including indexing, query optimization, and database schema design, resulting in improved efficiency and scalability of the RentV application.",
  },
  {
    name: "Developed Robust Node.js APIs:",
    para: "Designed and implemented RESTful APIs in Node.js, adhering to industry standards and best practices, to provide reliable backend functionality for the RentV application, ensuring seamless integration with the front-end.",
  },
  {
    name: "Enhanced Skills in Node.js and React: ",
    para: "Expanded knowledge and proficiency in Node.js and React through hands-on experience and continuous learning, staying updated with the latest trends and technologies in full-stack web development.",
  },
];
