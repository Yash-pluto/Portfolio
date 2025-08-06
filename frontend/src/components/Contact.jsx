import React, { useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 100);
  };

  return (
    <section
      id='contact'
      className='relative w-full py-24 px-6 text-white flex flex-col items-center justify-center text-center overflow-hidden z-0'
    >
      <div className='pointer-events-none absolute inset-0 z-0'>
        <div className='w-full h-full bg-[linear-gradient(to_right,#FFFF_2px,transparent_1px),linear-gradient(to_bottom,#FFFF_2px,transparent_1px)] bg-[size:38px_38px]' />
      </div>
      <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black via-black/90 via-10% to-transparent z-10' />
      <div className='pointer-events-none absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-black via-black/90 via-50% to-transparent z-10' />
      <div className='relative z-20'>
        <h2 className='text-3xl md:text-4xl font-bold text-blue-500'>
          Contact Me
        </h2>

        <p className='text-base md:text-lg mt-3 mb-8 text-gray-400 max-w-md mx-auto'>
          Got an idea or a collab in mind? Hit me up right here.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action='https://formspree.io/f/mwpqrjbr'
          method='POST'
          className='w-full max-w-md flex flex-col gap-4 mx-auto'
        >
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required
            className='px-4 py-2 rounded bg-[#1a1a1a] border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='email'
            name='email'
            placeholder='you@example.com'
            required
            className='px-4 py-2 rounded bg-[#1a1a1a] border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <textarea
            name='message'
            rows='4'
            placeholder='What’s up?'
            required
            className='px-4 py-2 rounded bg-[#1a1a1a] border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
          ></textarea>

          <button
            type='submit'
            className='mt-2 bg-blue-500 py-2 px-5 rounded text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all duration-300'
          >
            Send It 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
