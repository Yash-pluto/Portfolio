// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const stackItems = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "TailwindCSS",
  "JavaScript",
  "Git/GitHub",
  "Framer Motion",
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <motion.section
      id='about'
      className='w-full min-h-screen px-6 py-20 flex flex-col items-center text-center z-[10] bg-black'
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* 🔹 Badge */}
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className='relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-4 py-1.5 text-xs text-zinc-50 shadow-[0_1px_0px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:blur-md before:bg-purple-500/10'
      >
        About Me
      </motion.p>

      {/* 🔱 Headline */}
      <motion.h2
        variants={fadeUpVariant}
        initial='hidden'
        whileInView='visible'
        custom={1}
        className='text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 leading-tight mb-6'
      >
        Who is Yash Vardhan?
      </motion.h2>

      {/* 📜 Paragraph */}
      <motion.p
        variants={fadeUpVariant}
        initial='hidden'
        whileInView='visible'
        custom={2}
        className='max-w-3xl text-zinc-400 text-base md:text-lg lg:text-xl mb-10 leading-relaxed'
      >
        I'm a Full-Stack Developer crafting high-performance apps with React,
        Node.js, and MongoDB. I blend functionality with elegance, designing
        modern UI that solves real-world problems while maintaining performance,
        responsiveness, and style.
      </motion.p>

      {/* 🧠 Tech Stack Grid */}
      <motion.div
        variants={fadeUpVariant}
        initial='hidden'
        whileInView='visible'
        custom={3}
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-white'
      >
        {stackItems.map((tech, index) => (
          <motion.span
            key={tech}
            className='bg-zinc-800 px-4 py-2 rounded-lg'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5 + index * 0.1,
              duration: 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* 🎯 Signature Mission */}
      <motion.p
        variants={fadeUpVariant}
        initial='hidden'
        whileInView='visible'
        custom={4}
        className='mt-12 italic text-zinc-500 max-w-2xl text-sm md:text-base'
      >
        "Code is my language. Execution is my obsession. I'm not here to play —
        I'm here to build with precision and impact."
      </motion.p>
    </motion.section>
  );
};

export default About;
