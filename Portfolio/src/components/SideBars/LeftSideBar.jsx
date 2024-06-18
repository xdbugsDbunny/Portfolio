import React from "react";
import { motion } from "framer-motion";
import ClickMe from "../../assets/ClickMe.png";

const LeftSideBar = ({ isOpen, setIsOpen }) => {
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="left-sidebar fixed top-0 left-0 h-full flex flex-col justify-center items-center z-[99]">
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="alert-message py-2"
        onClick={openModal}
      >
        <img src={ClickMe} alt="" className="w-[3vw] h-[25vh]" />
      </motion.button>
    </div>
  );
};

export default LeftSideBar;
