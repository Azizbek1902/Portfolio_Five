import React, { useState } from "react";
import img from "../../assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        width: "100%",
        background: "rgba(39, 43, 44, 0.87)",
        height: " 106px",
        position: "absolute",
        zIndex: "999",
        boxShadow: "3px 0 13px rgba(30, 30, 30, 0.90)",
      }}
    >
      <div className="md:max-w-[800px] xl:max-w-[1350px] lg:max-w-[950px] mx-auto px-2 sm:px-6 lg:px-0">
        <div className="relative flex items-center justify-between h-28">
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img src={img} alt="" />
            </div>
            <div className="hidden sm:block sm:ml-6 lg:ml-32 xl:ml-72">
              <div className="flex items-center space-x-0 lg:space-x-3 xl:space-x-8 ">
                <NavLink
                  to="/"
                  className="text-white  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="/what"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  What we do
                </NavLink>
                <NavLink
                  to="/portfoloi"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Portfoilo
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-white relative left-5 xl:relative xl:left-28 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Login
                </NavLink>
                <NavLink className="text-white hover:bg-gray-700 xl:relative xl:left-28 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <AiOutlineSearch size={22} className="relative left-3" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-[#0000009E] hover:text-white block px-2 py-2 rounded-md text-base font-medium"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/what"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              What we do
            </NavLink>
            <NavLink
              to="/portfoloi"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Portfoilo
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
