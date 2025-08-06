import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HELLSTORE – E-Commerce Website",
    description:
      "Full-stack MERN e-commerce store featuring Admin & Customer dashboards, dynamic cart, purchase history, and secure checkout.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    image: "/images/hellstore.png",
    trailer: "https://www.youtube.com/embed/project1",
    link: "https://github.com/Yash-pluto/E-Commerce-Website",
  },
  {
    title: "Solo Leveling Tracker",
    description:
      "Habit + stat tracker with leveling, daily quests, boss battles, and custom titles. Inspired by Solo Leveling.",
    tech: ["React", "MongoDB", "Express", "TailwindCSS"],
    image: "/images/solotracker.png",
    trailer: "https://www.youtube.com/embed/project2",
    link: "https://github.com/Yash-pluto/SoloLevelingTracker",
  },
  {
    title: "Portfolio Website",
    description:
      "Developer portfolio with Framer Motion transitions, mobile-first design, and dynamic UI.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    image: "/images/portfolio.png",
    trailer: "https://www.youtube.com/embed/project3",
    link: "https://github.com/Yash-pluto/Portfolio",
  },
  {
    title: "ShadowLinks",
    description:
      "A minimal, fast-loading Linktree alternative to showcase portfolios and social handles.",
    tech: ["React", "TailwindCSS"],
    image: "/images/shadowlinks.png",
    trailer: "https://www.youtube.com/embed/project4",
    link: "https://github.com/Yash-pluto/shadowlinks",
  },
];

const ProjectCard = ({ title, description, tech, image, trailer, link }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className='bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl p-6 min-w-[340px] sm:min-w-[420px] max-w-[440px] mx-4'
    >
      <img
        src={image}
        alt={title}
        className='rounded-md w-full h-56 object-cover mb-5 border border-[#222]'
      />
      <h2 className='text-xl font-semibold text-white mb-2'>{title}</h2>
      <p className='text-sm text-gray-400 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2 mb-5'>
        {tech.map((item, i) => (
          <span
            key={i}
            className='text-xs bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded-md'
          >
            {item}
          </span>
        ))}
      </div>
      <div className='flex items-center justify-between'>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-blue-400 underline hover:text-blue-500'
        >
          View Code
        </a>
        <button
          onClick={() => setShowVideo(!showVideo)}
          className='text-xs text-gray-300 hover:text-white transition'
        >
          {showVideo ? "Hide Trailer" : "Show Trailer"}
        </button>
      </div>
      {showVideo && (
        <div className='mt-4'>
          <iframe
            className='w-full h-64 rounded-md'
            src={trailer}
            title={`${title} Trailer`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // PC: Touch-drag horizontal scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    const handleDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleLeave = () => {
      isDragging.current = false;
    };

    const handleUp = () => {
      isDragging.current = false;
    };

    const handleMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      container.scrollLeft = scrollLeft.current - walk;
    };

    container.addEventListener("mousedown", handleDown);
    container.addEventListener("mouseleave", handleLeave);
    container.addEventListener("mouseup", handleUp);
    container.addEventListener("mousemove", handleMove);

    return () => {
      container.removeEventListener("mousedown", handleDown);
      container.removeEventListener("mouseleave", handleLeave);
      container.removeEventListener("mouseup", handleUp);
      container.removeEventListener("mousemove", handleMove);
    };
  }, [isMobile]);

  const scroll = (direction) => {
    const amount = 400;
    containerRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id='projects' className='bg-black px-4 pt-8 pb-[40rem]'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-4xl font-semibold text-white text-center mb-2'>
          Projects
        </h1>
        <p className='text-gray-400  text-center mb-10 max-w-2xl mx-auto'>
          Full-stack builds, clean interfaces, and production-ready systems.
        </p>

        <p className='text-gray-500 text-xs text-center mb-10 max-w-2xl mx-auto'>
          Swipe to view more projects {`->`}
        </p>
        <div className='relative'>
          <div
            ref={containerRef}
            className='flex overflow-x-auto no-scrollbar scroll-smooth px-2'
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
