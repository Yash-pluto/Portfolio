import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUserAlt,
  FaLayerGroup,
  FaProjectDiagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 🍔 Hamburger Button */}
      <button
        className='md:hidden fixed top-4 right-4 z-[9999] text-white text-3xl'
        onClick={toggleNavbar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 🧊 Sidebar Navbar */}
      <nav
        className={`
          fixed top-0 left-0 h-screen w-[75px] z-50 flex flex-col items-center justify-between 
          py-6 px-2 transition-transform duration-300
         text-white
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
          backdrop-blur-[1px]
          bg-[linear-gradient(144deg,_rgba(238,237,242,0.1),_hsla(0,0%,100%,0)_1%)]
          
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:flex md:flex-row md:items-center md:justify-between 
          md:h-[75px] md:w-full md:px-10 md:py-0 md:gap-6
        `}
      >
        {/* 🔥 Logo / Initials */}
        <div className='text-4xl font-bold text-white mb-[0px] tracking-widest animate-fadeIn'>
          YV
        </div>

        {/* 🌐 Nav Icons */}
        <ul className='flex flex-col md:flex-row gap-8 text-white text-xl'>
          <li className='group relative'>
            <a href='#hero' className='nav-icon'>
              <FaHome />
              <span className='tooltip'>Home</span>
            </a>
          </li>
          <li className='group relative'>
            <a href='#about' className='nav-icon'>
              <FaUserAlt />
              <span className='tooltip'>About</span>
            </a>
          </li>
          <li className='group relative'>
            <a href='#projects' className='nav-icon'>
              <FaProjectDiagram />
              <span className='tooltip'>Projects</span>
            </a>
          </li>
          <li className='group relative'>
            <a href='#stack' className='nav-icon'>
              <FaLayerGroup />
              <span className='tooltip'>Tech Stack</span>
            </a>
          </li>
          <li className='group relative'>
            <a href='#contact' className='nav-icon'>
              <FaEnvelope />
              <span className='tooltip'>Contact</span>
            </a>
          </li>
          <li className='group relative'>
            <a
              href='https://github.com/Yash-pluto'
              target='_blank'
              className='nav-icon'
            >
              <FaGithub />
              <span className='tooltip'>GitHub</span>
            </a>
          </li>
          <li className='group relative'>
            <a
              href='https://linkedin.com/in/vardhan-yash3105'
              target='_blank'
              className='nav-icon'
            >
              <FaLinkedin />
              <span className='tooltip'>LinkedIn</span>
            </a>
          </li>
        </ul>

        {/* 🔻 Bottom Label */}
        <div className='text-xs font-bold text-zinc-500 rotate-90 mb-[0px] tracking-widest'>
          NAV
        </div>
      </nav>
    </>
  );
};

export default Navbar;
