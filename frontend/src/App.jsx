import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import FallingStrips from "./components/FallingStrips.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Stacks from "./components/Stacks.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className='overflow-x-hidden no-select no-drag no-scrollbar h-screen relative min-h-screen w-full text-white antialiased bg-black'>
      <CustomCursor />
      <FallingStrips />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stacks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
