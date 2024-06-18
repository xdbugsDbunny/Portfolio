import React from "react";
import logo2 from "../../assets/logo_white.png";


const Footer = () => {
  return (
    <footer className="w-full h-screen bg-zinc-900 py-20 px-20 rounded-t-3xl flex">
      <div className='w-1/2 h-full font-["Founders_Grotesk_X"] text-white flex flex-col justify-between'>
        <div className="heading">
          <h1 className="text-[10vw] leading-none -mb-10 uppercase font-semibold ">
            MERN
          </h1>
          <h1 className="text-[10vw] leading-none -mb-10 uppercase font-semibold ">
            Stack
          </h1>
          <h1 className="text-[10vw] leading-none -mb-10 uppercase font-semibold ">
            Developer
          </h1>
        </div>
        <img className="w-40" src={logo2} />
      </div>
      <div className='w-1/2 h-full font-["Founders_Grotesk_X"] text-white flex flex-col'>
        <div className="heading text-right ">
          <h1 className="text-[10vw] leading-none -mb-10 uppercase font-semibold ">
            Suraj
          </h1>
          <h1 className="text-[10vw] leading-none -mb-10 uppercase font-semibold ">
            Singh
          </h1>
          <h1 className="text-[10vw] leading-none -mb-10 uppercase font-semibold ">
            Negi
          </h1>
        </div>
        <div className="links mt-20 ">
          <h2 className="text-[1.5vw] tracking-normal font-['Poppins'] text-right ">Home</h2>
          <h2 className="text-[1.5vw] tracking-normal font-['Poppins'] text-right ">About Me</h2>
          <h2 className="text-[1.5vw] tracking-normal font-['Poppins'] text-right ">Skills</h2>
          <h2 className="text-[1.5vw] tracking-normal font-['Poppins'] text-right ">My Work</h2>
          <h2 className="text-[1.5vw] tracking-normal font-['Poppins'] text-right ">Contact Me</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
