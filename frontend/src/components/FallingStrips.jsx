import { useEffect, useState } from "react";

const FallingStrips = () => {
  const [strips, setStrips] = useState([]);

  useEffect(() => {
    const columnWidth = 38;
    const screenWidth = window.innerWidth;
    const columnCount = Math.floor(screenWidth / columnWidth);

    const generateStrip = () => {
      const left = Math.floor(Math.random() * columnCount) * columnWidth;

      const spawnZone = Math.random();
      let top;
      if (spawnZone < 0.25) top = -50;
      else if (spawnZone < 0.5) top = Math.random() * 100;
      else if (spawnZone < 0.75) top = window.innerHeight * 0.4;
      else top = window.innerHeight * 0.6;

      const height = 64 + Math.random() * 69; // Random height between 64px and 69
      const duration = 2 + Math.random() * 1.5;

      return {
        id: `${Date.now()}-${Math.random()}`,
        left,
        top,
        height,
        duration,
        opacity: 0.15 + Math.random() * 0.2,
      };
    };

    const spawnStrips = () => {
      const count = 5 + Math.floor(Math.random() * 5);

      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          setStrips((prev) => [...prev, generateStrip()]);
        }, i * 5000); // 5000ms delay between each strip in batch
      }
    };

    spawnStrips(); // Initial spawn
    const spawnInterval = setInterval(spawnStrips, 2500);

    return () => clearInterval(spawnInterval);
  }, []);

  // Cleanup old strips after 5s
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setStrips((prev) =>
        prev.filter((strip) => now - Number(strip.id.split("-")[0]) < 5000)
      );
    }, 2000);

    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <div className='absolute inset-0 z-[1] pointer-events-none overflow-hidden'>
      {strips.map((strip) => (
        <div
          key={strip.id}
          className='absolute w-[1.4px] bg-gradient-to-b from-blue-500/0 to-blue-500 animate-stripOnce'
          style={{
            left: `${strip.left}px`,
            top: `${strip.top}px`,
            height: `${strip.height}px`,
            animationDuration: `${strip.duration}s`,
            opacity: strip.opacity,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
};

export default FallingStrips;
