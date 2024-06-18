import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";
import { FaCode } from "react-icons/fa";

const CustomCursor = () => {
  const secondaryCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    isVisible: true,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      positionRef.current.mouseX = clientX;
      positionRef.current.mouseY = clientY;
      positionRef.current.isVisible = true; // Ensure cursor is visible on mousemove
    };

    const handleMouseLeave = () => {
      positionRef.current.isVisible = false; // Hide cursor when leaving window
    };

    const throttle = (callback, delay) => {
      let lastCall = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return callback(...args);
      };
    };

    const throttledMouseMove = throttle(handleMouseMove, 10);

    document.addEventListener("mousemove", throttledMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave); // Listen for mouse leave event

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave); // Remove event listener
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.destinationX = positionRef.current.mouseX;
      positionRef.current.destinationY = positionRef.current.mouseY;

      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
        if (positionRef.current.isVisible) {
          secondaryCursor.current.style.opacity = 1;
        } else {
          secondaryCursor.current.style.opacity = 0;
        }
      }

      requestAnimationFrame(followMouse);
    };

    followMouse();
  }, []);

  return (
    <div className={`cursor-wrapper default`}>
      <div className="secondary-cursor flex justify-center items-center" ref={secondaryCursor}>
        <FaCode size={'1.75vw'} />
      </div>
    </div>
  );
};

export default CustomCursor;
