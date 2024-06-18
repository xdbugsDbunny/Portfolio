import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import mern from "../../assets/mern.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const Headings = ["MERN", "STACK", "DEVELOPER"];

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
      className="w-full h-screen bg-white-900 pt-1"
    >
      <div className="heading mt-40 px-16">
        {Headings.map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "20vw" }}
                    transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
                    className=" w-[20vw] h-[7.5vw] mr-[2vw] overflow-hidden ml-[1vw] flex items-center"
                  >
                    <img src={mern} className="rounded-lg" />
                  </motion.div>
                )}
                <h1 className="text-[11vw] leading-[8vw] tracking-normal font-['Poppins'] font-bold  flex items-center">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-black-100 mt-16 py-6 px-20 flex justify-end items-center">
        <button className="button">
          <a className=" items-center flex gap-1" href="../assets/Suraj Singh Negi MERN Stack.pdf" download="Suraj Singh Negi MERN Stack.pdf">
            <div className="px-4 py-1 border-[2px] border-black rounded-full text-md font-['Poppins'] drop-shadow-lg">
              Download My Resume
            </div>
            <div className="w-8 h-8 rounded-full border-[2px] border-black flex justify-center items-center">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </a>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
