import React, { useState } from "react";

import { skillsData } from "../../Data/data";

const Skills = () => (
  <div className="container w-full h-[80vh] px-10">
    <div
      className="transparent box w-full h-full rounded-3xl bg-[hsla(0,0%,100%,.3)] px-10 py-1"
      style={{
        backdropFilter: 'blur(60px)',
        boxShadow: "20px 1px 50px rgba(0,0,0,.5)",
      }}
    >
      {skillsData
        .reduce((rows, category, index) => {
          if (index % 3 === 0) rows.push([]);
          rows[rows.length - 1].push(category);
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row w-full h-[22.5vh] mb-5 flex gap-10 justify-center items-center"
          >
            {row.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`w-1/3 h-full border-b-8 border-[bg-[hsla(0,0%,100%,.3)]] rounded-b-3xl flex flex-col gap-1 items-center`}
              >
                <h2 className="text-[1.3vw] font-['Nova_Round'] uppercase font-semibold ">
                  {category.category}
                </h2>
                <div className="imageContainer flex gap-5 ">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="box flex flex-col justify-center items-center"
                    >
                      {React.createElement(eval(tech.icon), {
                        size: "5vw",
                        color: tech.color,
                      })}
                      <h5 className="text-[1.1vw] font-['Nova_Round'] uppercase text-white font-semibold ">
                        {tech.name}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  </div>
);
export default Skills;
