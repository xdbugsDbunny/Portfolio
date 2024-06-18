import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "../../css/NavBar.css"; // Import CSS file for styling
import { Link, NavLink } from "react-router-dom";

const NavLinks = ["About Me", "Contact Me", "Projects"];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      if (isScrolledDown) {
        document.getElementById("navbar").classList.add("hide");
      } else {
        document.getElementById("navbar").classList.remove("hide");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {/* <headeer id="navbar" className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <NavLink
                to={"#"}
                className="text-base font-['Nova_Round'] font-medium text-gray-500 hover:text-gray-900"
              >
                About Me
              </NavLink>
              <NavLink
                to={"#"}
                className="text-base font-['Nova_Round'] font-medium text-gray-500 hover:text-gray-900"
              >
                My Work
              </NavLink>
              <NavLink
                to={"#"}
                className="text-base font-['Nova_Round'] font-medium text-gray-500 hover:text-gray-900"
              >
                Contact Me
              </NavLink>
            </nav>
          </div>
        </div>
        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink
                    to={"#"}
                    className="text-base font-['Nova_Round'] font-medium text-gray-500 hover:text-gray-900"
                  >
                    About Me
                  </NavLink>
                  <NavLink
                    to={"#"}
                    className="text-base font-['Nova_Round'] font-medium text-gray-500 hover:text-gray-900"
                  >
                    My Work
                  </NavLink>
                  <NavLink
                    to={"#"}
                    className="text-base font-['Nova_Round'] font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contact Me
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </headeer> */}
      <header id="navbar" className="navbar">
        <div className="w-40">
          <img className="" src={logo} alt="Logo" />
        </div>
        <nav className="links flex gap-10">
          {NavLinks.map((item, index) => (
            <a
              key={index}
              className={`text-xl font-bold font-['Nova_Round'] ${
                index === 2 && "ml-32"
              } cursor-pointer`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default NavBar;

// <header id="navbar" className="navbar">
//   <div className="w-40">
//     <img className="" src={logo} alt="Logo" />
//   </div>
//   <nav className="links flex gap-10">
//     {NavLinks.map((item, index) => (
//       <a key={index} className={`text-xl font-bold font-['Nova_Round'] ${index === 2 && "ml-32"} cursor-pointer`}>
//         {item}
//       </a>
//     ))}
//   </nav>
// </header>
