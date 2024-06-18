import { GoCodeReview } from "react-icons/go";
import React from "react";
import { ExpPoints } from "../../Data/data";

const Experience = () => {
  return (
    <div className="container w-full h-[80vh] px-10">
      <div
        className="transparent box w-full flex flex-col items-center h-full rounded-3xl bg-[hsla(0,0%,100%,.3)] px-10 py-1"
        style={{
          backdropFilter: 'blur(60px)',
          boxShadow: "20px 1px 50px rgba(0,0,0,.5)",
        }}
      >
        
        <h1 className="text-[1.8vw] font-['Nova_Round'] leading-none uppercase font-semibold flex items-center gap-10 ">
          May 2023 - December 2023 <GoCodeReview size={"4vw"} color="blue" />
        </h1>
        <h1 className="text-[1.5vw] font-['Nova_Round'] leading-none uppercase font-semibold ">
          Mern Stack Intern (CISAPP Pvt Ltd. Banglore)
        </h1>
        <div className="list w-full text-[1.3vw] font-['Nova_round'] text-white mt-2">
          <ul style={{ listStyle: "disc" }}>
            {ExpPoints.map((item, index) => (
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

export default Experience;
