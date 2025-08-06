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

const About = () => {
  return (
    <section
      id='about'
      className='w-full min-h-[full] mb-[8rem] px-6 flex flex-col items-center text-center z-[10]'
    >
      {/* 🔹 Badge - Animate this ONLY */}
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className='relative z-10 mb-6 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-4 py-1.5 text-xs text-zinc-50 shadow-[0_1px_0px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:blur-md before:bg-purple-500/10'
      >
        About Me
      </motion.p>

      {/* 🔱 Headline - Static */}
      <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 leading-tight mb-6'>
        Who is Yash Vardhan?
      </h2>

      {/* 📜 Paragraph - Static */}
      <p className='max-w-3xl text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed'>
        I'm a Full-Stack Developer crafting high-performance apps with React,
        ExpressJS, Node.js, and MongoDB. I blend functionality with elegance,
        designing modern UI that solves real-world problems while maintaining
        performance, responsiveness, and style.
      </p>

      {/* 🎯 Signature - Static */}
      <p className='mt-12 mb-[10rem] italic text-zinc-500 max-w-2xl text-sm md:text-base'>
        "I engineer systems with intent, not noise. Every function serves a
        purpose, every line moves with clarity. I don't chase trends. I
        architect solutions built to last."
      </p>

      {/* 💠 Line Divider - Optional Animation */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "66%" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className='mt-8 h-px bg-gradient-to-r from-blue-500/10 via-blue-500/70 to-blue-500/10'
      />
    </section>
  );
};

export default About;
