const Hero = () => {
  return (
    <section className='min-h-screen z-[10] flex flex-col justify-center items-center text-center px-6'>
      {/* 🔹 Badge */}
      <p className='relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0 md:text-sm'>
        Full Stack Dev 💻
      </p>

      {/* 🔱 Headline */}
      <h1 className='mb-3 text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-8xl lg:leading-tight'>
        Yash Vardhan
        <br />
        Engineering Student. Full-Stack Dev. Product-Minded Builder.
      </h1>

      {/* ✍️ Subtext */}
      <p className='text-gray-400 max-w-xl mb-10 text-base md:text-lg leading-relaxed'>
        Currently building impactful full-stack apps with React & MongoDB.
        Fueled by obsession, driven by execution, and focused on delivering
        value through clean code & real-world projects.
      </p>

      {/* 🎯 CTA Buttons */}
      <div className='flex gap-4 flex-wrap justify-center'>
        <a
          href='/YashResume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-blue-600 shadow-[0_0_10px_#3b82f6] hover:shadow-[0_0_15px_#60a5fa] text-white font-semibold px-6 py-3 rounded-md transition-all duration-200'
        >
          Download Resume
        </a>

        <a
          href='https://github.com/Yash-pluto'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white border border-white/20 px-6 py-3 rounded-md hover:bg-white/5 transition-all duration-200'
        >
          Stalk My GitHub 😈
        </a>
      </div>
    </section>
  );
};

export default Hero;
