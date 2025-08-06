import CustomCursor from "./components/CustomCursor.jsx";
import FallingStrips from "./components/FallingStrips.jsx";
import Hero from "./components/Hero.jsx";
import InfiniteScroll from "./components/InfiniteScroll.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className='relative h-full min-h-screen overflow-hidden text-white antialiased'>
      {/* 🔥 Components */}
      <CustomCursor />
      <FallingStrips />
      <Navbar />
      <Hero />
      <InfiniteScroll />
    </div>
  );
}

export default App;
