import React, { useEffect, useState } from "react";
import ochi from "../../assets/ochi.jpg";

const Play = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let X = e.clientX;
      let Y = e.clientY;

      let dX = X - window.innerWidth / 2;
      let dY = Y - window.innerHeight / 2;

      var angle = Math.atan2(dY, dX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <section className="play w-full h-screen overflow-hidden">
      <div
        data-scroll data-scroll-speed="-0.7"
        className="w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${ochi})` }}
      >
        <div className="flex gap-[2vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white relative ">
            <div className="relative w-2/3 h-2/3 bg-black rounded-full ">
              <div
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
              >
                <div className="w-10 h-10 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white ">
            <div className="relative w-2/3 h-2/3 bg-black rounded-full ">
              <div
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
              >
                <div className="w-10 h-10 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Play;
