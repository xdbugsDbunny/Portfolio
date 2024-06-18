import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const RightSideBar = () => {
  return (
    <div className="Right-sidebar fixed top-0 right-0 h-full xl:w-12 gap-10 flex flex-col justify-center items-center z-[99] mr-2">
      <div
        className="w-full h-[60vh] flex flex-col gap-10 bg-[hsla(0,0%,100%,.3)] justify-center items-center z-[99] rounded-3xl"
        style={{
          backdropFilter: "blur(250px)",
          boxShadow: "20px 1px 50px rgba(0,0,0,.5)",
        }}
      >
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.2, x: -10 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="#"
          className="social-link"
        >
          <FaLinkedin size={"2vw"} color="#0275B4" />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.2, x: -10 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="#"
          className="social-link"
        >
          <FaInstagram size={"2vw"} color="#c13584" />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.2, x: -10 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="#"
          className="social-link"
        >
          <FaWhatsapp size={"2vw"} color="#29A61A" />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.2, x: -10 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="#"
          className="social-link"
        >
          <FaGithub size={"2vw"} />
        </motion.a>
        <motion.a
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.2, x: -10 }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1 }}
          href="#"
          className="social-link"
        >
          <FaXTwitter size={"2vw"} />
        </motion.a>
      </div>
    </div>
  );
};

export default RightSideBar;
