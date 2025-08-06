const Hero = () => {
  return (
    <>
      <div className='fixed inset-0 z-[-4] pointer-events-none bg-[#08090a]'>
        {/* Grid Lines */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,_#131d41_2px,_transparent_1px),_linear-gradient(to_bottom,_#131d41_2px,_transparent_1px)] bg-[size:38px_38px] opacity-100' />
      </div>
      <div className='z-[1]'>
        {/* Bottom fade */}
        <div className='absolute z-[-2] bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black via-black to-transparent' />
      </div>
      <section className='min-h-screen z-[10] flex flex-col justify-start items-center text-center px-6 pt-[135px]'>
        {/* 🔹 Badge */}
        <p className='relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0 md:text-sm shadow-[0_1px_0px_rgba(255,255,255,1)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:blur-md before:bg-cyan-400/10'>
          Full Stack Developer 💻
        </p>

        {/* 🔱 Headline */}
        <h1 className='mb-3 text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-8xl lg:leading-tight'>
          Yash Vardhan
          <br />
          Full-Stack Dev.
        </h1>

        {/* ✍️ Subtext */}
        <p className='mb-9 max-w-2xl text-center text-base text-zinc-400 sm:text-lg md:text-xl'>
          Currently building impactful full-stack apps with React & MongoDB.
          Fueled by obsession, driven by execution, and focused on delivering
          value through clean code & real-world projects.
        </p>

        {/* 🎯 CTA Buttons */}
        <div className='flex gap-4 flex-col sm:flex-row flex-wrap justify-center'>
          <div className='group p-[2px] rounded-lg border border-blue-700 transition-all duration-200 hover:border-transparent'>
            <a
              href='/YashResume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-600 text-white font-semibold px-6 py-3 rounded-md block transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:scale-105'
            >
              Download Resume
            </a>
          </div>

          <a
            href='https://github.com/Yash-pluto'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white border border-white/20 px-6 py-3 rounded-md hover:bg-white/5 transition-all duration-200 hover:scale-105'
          >
            My GitHub
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
