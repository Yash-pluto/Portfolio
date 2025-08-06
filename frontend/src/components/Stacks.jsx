// frontend/components/Stacks.jsx
import { motion } from "framer-motion";
import React from "react";

const stackCategories = [
  {
    title: "Frontend",
    techs: [
      {
        name: "React",
        logo: "/logos/react.svg",
        tooltip: "Main UI Framework – Used in all major projects ⚛️",
      },
      {
        name: "Tailwind",
        logo: "/logos/tailwind.svg",
        tooltip: "Utility-First CSS – Clean, responsive, fast as hell 🌪️",
      },
      {
        name: "HTML5",
        logo: "/logos/html.svg",
        tooltip: "Skeleton of the Web – Every project starts here 🧱",
      },
      {
        name: "CSS3",
        logo: "/logos/css.svg",
        tooltip: "Style Game Strong – Animations, grids, and drip 🎨",
      },
      {
        name: "JavaScript",
        logo: "/logos/js.svg",
        tooltip: "Web Logic & Power – Makes it all come alive ⚡",
      },
    ],
  },
  {
    title: "Backend",
    techs: [
      {
        name: "Node.js",
        logo: "/logos/node.svg",
        tooltip: "JavaScript Runtime – Backend beast with V8 engine 🚀",
      },
      {
        name: "Express",
        logo: "/logos/express.svg",
        tooltip: "Minimal & Fast – Routing, APIs, and middleware 🔥",
      },
      {
        name: "MongoDB",
        logo: "/logos/mongo.svg",
        tooltip: "NoSQL King – Flexible, JSON-based, cloud-ready 📦",
      },
    ],
  },
  {
    title: "Tools",
    techs: [
      {
        name: "Framer",
        logo: "/logos/framer.svg",
        tooltip: "Framer Motion – Smooth animations, clean transitions 🎞️",
      },
      {
        name: "GitHub",
        logo: "/logos/github.svg",
        tooltip: "Version Control – Every line of code backed up 💾",
      },
    ],
  },
];

const Stacks = () => {
  return (
    <section
      id='stack'
      className='scroll-mt-[10rem] scroll-smooth relative bg-black py-20 px-6 w-full  overflow-hidden mb-10'
    >
      <div className='pointer-events-none absolute inset-0 z-[0]'>
        <div className='w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.6)_2px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_2px,transparent_1px)] bg-[size:38px_38px]' />
      </div>
      <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black via-black/5 via-50% to-transparent z-[10]' />
      <div className='pointer-events-none absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-black via-black/80 via-40% to-transparent z-[10]' />
      <div className='relative z-10 max-w-screen-xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-white mb-[4rem] text-center'>
          Tech Stack
        </h2>

        <div className='flex flex-col gap-12 justify-center items-center'>
          {stackCategories.map((category, idx) => (
            <div
              key={idx}
              className='flex flex-row items-center justify-start gap-8 md:gap-16'
            >
              {/* Category Title on Left */}
              <h3 className='text-xl md:text-2xl font-semibold text-white min-w-[120px]'>
                {category.title}
              </h3>

              {/* Marquee Scroll Next to It */}
              <div className='relative w-[300px] overflow-hidden'>
                <motion.div
                  className='flex w-max gap-6'
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...category.techs, ...category.techs].map((tech, index) => (
                    <motion.div
                      key={index}
                      className='group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md min-w-max hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-shadow duration-300'
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className='h-6 w-6 object-contain'
                      />
                      <div className='relative'>
                        <span className='text-sm text-gray-300 whitespace-nowrap'>
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
