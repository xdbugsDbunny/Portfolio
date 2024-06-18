import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import wallpaper from "../../assets/wallpaper.jpg";
import wallpaper2 from "../../assets/wallpaper2.jpg";
import MiniNavBar from "./MiniNavBar";

const About = () => {
  const Socials = [
    { name: "Instagram", icon: <IoLogoInstagram fontSize={"1.5vw"} /> },
    { name: "LinkedIn", icon: <FaLinkedin fontSize={"1.5vw"} /> },
    { name: "Facebook", icon: <FaFacebook fontSize={"1.5vw"} /> },
    { name: "X", icon: <FaXTwitter fontSize={"1.5vw"} /> },
    { name: "Github", icon: <FaGithub fontSize={"1.5vw"} /> },
  ];

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
      className="px-10 py-5 rounded-t-3xl h-screen bg-cover w-full "
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <MiniNavBar />
    </section>
  );
};

export default About;

