import React from "react";
import "../../css/ProjectsTwo.css";
import { work } from "../../Data/data.js";
import { FaAward } from "react-icons/fa6";

const InternshipProjects = () => {
  const VisitButton = () => {};

  return (
    <section className="w-full py-10">
      <div className="w-full px-20 border-b-2 pb-10 flex gap-5">
        <h1 className="text-[4vw] font-['Poppins'] tracking-tighter leading-none">
        Internship Project Showcase <br/> Highlighting My Accomplishments
        </h1>
        <FaAward size={'5vw'} />
      </div>
      <div className="px-20 border-b-2 pb-10">
        <div className="newCards w-full flex gap-5 mt-10">
          {work.map((item, index) => (
            <div
              className="newCardContainer w-1/4 h-[55vh] relative perspective transition-transforms duration-2000 ease-in-out"
              key={index}
            >
              <div
                className="front absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center rounded-2xl"
                style={{ backgroundColor: `${item.frontBgColor}` }}
              >
                <img
                  className="p-2  w-full bg-cover rounded-2xl h-[30vh]"
                  src={item.img}
                  alt={item.name}
                />
                <h1
                  className='text-[2vw] text-black bg-white rounded-2xl px-5 font-semibold mt-10 font-["Montserrat"]'
                  style={{ color: `${item.nameColor}` }}
                >
                  {item.name}
                </h1>
              </div>
              <div
                className="back absolute top-0 left-0 w-full h-full justify-between items-center rounded-2xl p-4 text-center flex flex-col "
                style={{ backgroundColor: `${item.backBgColor}` }}
              >
                <h1
                  className='text-[1.5vw] text-black font-["Poppins"] border-b-2 '
                  style={{ color: `${item.headingColor}` }}
                >
                  {item.name}
                </h1>
                <p
                  className='text-[1vw] font-["Montserrat"] '
                  style={{ color: `${item.textColor}` }}
                >
                  <li>{item.lineOne}</li>
                  <li>{item.lineTwo}</li>
                  <li>{item.lineThree}</li>
                </p>
                <button
                  className=" px-5 mt-5 text-[1.5vw] border-2 font-['Montserrat'] text-black border-1 border-black rounded-xl "
                  style={{ backgroundColor: `${item.buttonColor}` }}
                >
                  <a href={item.link}> Visit</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipProjects;
