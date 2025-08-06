import About from "./components/About.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import FallingStrips from "./components/FallingStrips.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Stacks from "./components/Stacks.jsx";

function App() {
  return (
    <div className='overflow-x-hidden no-scrollbar h-screen relative min-h-screen w-full text-white antialiased bg-black'>
      {/* 🔥 Components */}
      <CustomCursor />
      <FallingStrips />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stacks />
    </div>
  );
}

export default App;
