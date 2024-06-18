import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import { projects } from "../../Data/data.js";
import { GrProjects } from "react-icons/gr";

const Projects = () => {
  const [mouseStates, setMouseStates] = useState(projects.map(() => false));

  const handleMouseEnter = (index) => {
    setMouseStates((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setMouseStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <section className="w-full py-10">
      <div className="w-full px-20 border-b-2 pb-10 flex items-center gap-10">
        <h1 className="text-[4vw] font-['Poppins'] tracking-tighter">
          Projects
        </h1>
        <GrProjects size={"5vw"} />
      </div>
      <div className="px-20">
        <div className="w-full mt-10">
          {projects.map((project, index) =>
            index % 2 === 0 ? (
              <div key={index} className="flex gap-8">
                {projects.slice(index, index + 2).map((project, subIndex) => (
                  <ProjectCard
                    key={index + subIndex}
                    project={project}
                    index={index + subIndex}
                    mouseStates={mouseStates}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  mouseStates,
  handleMouseEnter,
  handleMouseLeave,
}) => (
  <div
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={() => handleMouseLeave(index)}
    className={`cardContainer relative w-1/2 mt-5 h-[75vh] ${
      project.side === "right" ? "ml-auto" : ""
    }`}
  >
    <h1 className={project.css}>
      {project.pName.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          className="inline-block translate-y-full"
          initial={{ y: "100%" }}
          animate={mouseStates[index] ? { y: "0%" } : { y: "100%" }}
          transition={{
            ease: Power4.easeInOut,
            delay: charIndex * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
    <motion.div
      initial={{ transform: "scale(1)" }}
      animate={
        mouseStates[index]
          ? { transform: "scale(0.96)" }
          : { transform: "scale(1)" }
      }
      className={`card w-full h-full rounded-xl p-5`}
      style={{backgroundColor:`${project.bg}`}}
    >
      <motion.img
        initial={{ transform: "scale(0.8)" }}
        animate={
          mouseStates[index]
            ? { transform: "scale(0.9)" }
            : { transform: "scale(0.8)" }
        }
        className="w-full h-full bg-cover rounded-2xl"
        src={project.img}
        alt={project.pName}
      />
    </motion.div>
  </div>
);

export default Projects;