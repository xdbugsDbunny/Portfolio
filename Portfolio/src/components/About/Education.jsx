import React from "react";
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { Schools } from "../../Data/data.js";

const Education = () => {
    const groupedSchools = Schools.reduce((rows, category, index) => {
      if (index % 2 === 0) rows.push([]);
      rows[rows.length - 1].push(category);
      return rows;
    }, []);
  
    return (
      <div className="container w-full h-[80vh] px-10 flex flex-wrap gap-10">
        {groupedSchools.map((row, rowIndex) => (
          <div key={rowIndex} className="w-full flex gap-10">
            {row.map((item, itemIndex) => (
              <div key={itemIndex} className="transparent box w-1/2 rounded-3xl bg-[hsla(0,0%,100%,.3)] px-10 py-1"
                style={{
                  backdropFilter: "blur(60px)",
                  boxShadow: "20px 1px 50px rgba(0,0,0,.5)",
                }}
              >
                <div className="school w-full h-full py-10  flex flex-col gap-10 justify-between">
                  <div className="ten flex flex-col">
                    <div className="flex justify-center items-center gap-5">
                      {item.icon === FaSchool && <FaSchool size={"6vw"} color="#052afc" />}
                      {item.icon === BiSolidSchool && <BiSolidSchool size={"6vw"} color="#052afc" />}
                      {item.icon === FaUserGraduate && <FaUserGraduate size={"6vw"} color="#052afc" />}
                      <h2 className="text-[1.3vw] font-['Nova_Round'] uppercase font-semibold text-[#052afc]">{item.class}</h2>
                      <h2 className="text-[1.3vw] font-['Nova_Round'] uppercase font-semibold text-[#052afc]">({item.year})</h2>
                    </div>
                    <h3 className="text-[1.5vw] font-['Nova_Round'] uppercase font-semibold text-white">
                      {item.marks}
                    </h3>
                    <h3 className="text-[1.3vw] font-['Nova_Round'] uppercase font-semibold text-white">
                      {item.schoolName}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

export default Education;
