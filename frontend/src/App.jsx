import About from "./components/About.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import FallingStrips from "./components/FallingStrips.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className='overflow-x-hidden h-screen relative min-h-screen w-full text-white antialiased bg-black'>
      {/* 🔥 Components */}
      <CustomCursor />
      <FallingStrips />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
