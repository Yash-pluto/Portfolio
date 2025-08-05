import CustomCursor from "./components/CustomCursor.jsx";
import FallingStrips from "./components/FallingStrips.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <div className='relative h-full min-h-screen overflow-hidden text-white antialiased'>
      {/* === Grid Background & Fades === */}
      <div className='fixed inset-0 z-[-4] pointer-events-none bg-[#08090a]'>
        {/* Grid Lines */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,_#131d41_1px,_transparent_1px),_linear-gradient(to_bottom,_#131d41_1px,_transparent_1px)] bg-[size:40px_40px] opacity-50' />
      </div>
      <div className='z-[1]'>
        {/* Bottom fade */}
        <div className='absolute z-[-2] bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black via-black to-transparent' />
      </div>

      {/* 🔥 Components */}
      <CustomCursor />
      <FallingStrips />
      <Hero />
    </div>
  );
}

export default App;
