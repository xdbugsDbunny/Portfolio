import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../Data/data";

const Marquee = () => {
  // Flatten the skillsData array to get a single array of technologies
  const technologies = skillsData.flatMap(({ technologies }) => technologies);

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="0.025"
      className="w-full py-28 bg-zinc-800 rounded-t-3xl"
    >
      <div className="text bg-transparent border-t-2 border-b-2 py-10 border-white text-white flex items-center overflow-hidden whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="flex items-center gap-20"
        >
          {technologies.map((item, index) =>
            React.createElement(eval(item.icon), {
              key: index,
              size: "20vw",
              color: item.color,
            })
          )}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="flex items-center gap-20"
        >
          {technologies.map((item, index) =>
            React.createElement(eval(item.icon), {
              key: index,
              size: "20vw",
              color: item.color,
            })
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
