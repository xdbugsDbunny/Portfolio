import React from "react";
import { SoftSkills } from "../../Data/data.js";

const AdditionalSkills = () => {
  return (
    <div className="container w-full h-[80vh] px-10">
      <div
        className="transparent box w-full flex flex-col  items-center h-full rounded-3xl bg-[hsla(0,0%,100%,.3)] px-10 py-1"
        style={{
          backdropFilter: blur("60px"),
          boxShadow: "20px 1px 50px rgba(0,0,0,.5)",
        }}
      >
        <h1 className="text-[2vw] font-['Nova_Round'] leading-none uppercase font-semibold ">
          Soft Skills
        </h1>
        <div className="list w-full text-[1.3vw] font-['Nova_round'] text-white mt-2">
          <ul style={{ listStyle: "disc" }}>
            {SoftSkills.map((item, index) => (
              <li>
                <h4 className="text-[black] font-semibold leading-none">
                  {item.name}
                </h4>{" "}
                <p className="pl-10">{item.para}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSkills;
