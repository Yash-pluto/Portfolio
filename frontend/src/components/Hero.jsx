import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false, margin: "-20% 0px" });
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* 🔥 Components */}
      <div className='fixed inset-0 z-[-1] pointer-events-none '>
        {/* Grid Lines */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,_#142772_2px,_transparent_1px),_linear-gradient(to_bottom,_#142772_2px,_transparent_1px)] bg-[size:38px_38px] opacity-100' />
      </div>
      <section
        ref={heroRef}
        id='hero'
        className='min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[120px] pb-[100px] relative z-10 '
      >
        {/* 🔺 Top Fade */}
        <div className='pointer-events-none absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-black to-transparent z-[-1]' />

        {/* 🔹 Badge */}
        <motion.p
          variants={fadeUp}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className='relative z-10 mb-4 inline-block rounded-full border border-zinc-700  px-4 py-2 text-sm text-zinc-50 md:text-base shadow-[0_1px_1px_rgba(255,255,255,0.9)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:blur-md '
        >
          Full Stack Developer 💻
        </motion.p>

        {/* 🔱 Headline */}
        <motion.h1
          variants={fadeUp}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className='mb-4 text-center text-4xl font-bold leading-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight drop-shadow-lg'
        >
          Yash Vardhan
          <br />
          <span className='text-blue-500'>Full-Stack Dev</span>
        </motion.h1>

        {/* ✍️ Subtext */}
        <motion.p
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className='mb-10 max-w-2xl text-center text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed'
        >
          Crafting scalable full-stack apps with React & MongoDB. I don't code
          for fun - I code for domination. 💻⚔️
        </motion.p>

        {/* 🎯 CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          className='flex gap-4 flex-col sm:flex-row flex-wrap justify-center'
        >
          {/* Resume Button with sexy blue border wrap */}
          <div className='flex justify-center border-2 border-blue-500 p-1 rounded-xl hover:border-none transition-all duration-200'>
            <a
              href='/YashResume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className=' bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:shadow-lg hover:scale-105'
            >
              Download Resume
            </a>
          </div>

          {/* GitHub Button */}
          <a
            href='https://github.com/Yash-pluto'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-white/20 text-white px-6 py-3 rounded-md hover:bg-white/5 transition-all duration-200 hover:scale-105'
          >
            My GitHub
          </a>
        </motion.div>

        {/* 🔻 Bottom Fade */}
        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black to-transparent z-[-1]' />
      </section>
    </>
  );
};

export default Hero;
