import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full border-t border-white text-white py-8 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-semibold text-blue-500'>Yash Vardhan</h3>
          <p className='text-sm text-gray-400'>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        <div className='flex gap-6 text-sm text-gray-300'>
          <a
            href='#about'
            className='hover:text-blue-500 transition-all duration-300'
          >
            About
          </a>
          <a
            href='#projects'
            className='hover:text-blue-500 transition-all duration-300'
          >
            Projects
          </a>
          <a
            href='#contact'
            className='hover:text-blue-500 transition-all duration-300'
          >
            Contact
          </a>
        </div>
        <div className='flex gap-4 text-gray-300'>
          <a
            href='https://github.com/Yash-pluto'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-500 transition-all duration-300 text-lg'
          >
            <FaGithub />
          </a>
          <a
            href='https://linkedin.com/in/vardhan-yash3105'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-500 transition-all duration-300 text-lg'
          >
            <FaLinkedin />
          </a>
          <a
            href='mailto:your@email.com'
            className='hover:text-blue-500 transition-all duration-300 text-lg'
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
