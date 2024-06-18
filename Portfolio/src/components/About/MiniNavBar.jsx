import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import AdditionalSkills from "./AdditionalSkills";
import { FaFileCode } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const MiniNavBar = () => {
  const [active, setActive] = useState("Skills");

  const tabs = [
    { name: "Skills", component: <Skills />,icon:<FaFileCode/> },
    { name: "Education", component: <Education />,icon: <TbBooks/> },
    { name: "Experience", component: <Experience />,icon: <FaLaptopCode/> },
    { name: "AdditionalSkills", component: <AdditionalSkills />,icon:<FaPlus/> }
  ];

  return (
    <div>
      <div className="w-full h-[10vh] flex justify-center items-center">
        <div className="w-auto h-full flex gap-20 justify-center items-center">
        {tabs.map(tab => (
            <button
              key={tab.name}
              className={`flex items-center text-[2.5vw] font-['Nova_Round'] ${active === tab.name ? 'text-blue-500' : 'text-white'}`}
              onClick={() => setActive(tab.name)}
            >
              {tab.name}{tab.icon}
            </button>
          ))}
        </div>
      </div>
      <div>{tabs.find(tab => tab.name === active)?.component}</div>
    </div>
  );
};

export default MiniNavBar;
