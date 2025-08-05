import { useEffect, useState } from "react";

const FallingStrips = () => {
  const [strips, setStrips] = useState([]);

  useEffect(() => {
    const columnWidth = 40;
    const screenWidth = window.innerWidth;
    const columnCount = Math.floor(screenWidth / columnWidth);

    const generateStrip = () => {
      const left = Math.floor(Math.random() * columnCount) * columnWidth;

      const spawnZone = Math.random();
      let top;
      if (spawnZone < 0.25) top = -50; // From top
      else if (spawnZone < 0.5)
        top = Math.random() * 100; // Between top and mid
      else if (spawnZone < 0.75) top = window.innerHeight * 0.4; // Mid
      else top = window.innerHeight * 0.6; // Below mid

      const height = 100 + Math.random() * 150;
      const duration = 2 + Math.random() * 2;

      return {
        id: `${Date.now()}-${Math.random()}`,
        left,
        top,
        height,
        duration,
        opacity: 0.08 + Math.random() * 0.15,
      };
    };

    const spawnStrips = () => {
      const newStrips = Array.from({
        length: 5 + Math.floor(Math.random() * 5),
      }).map(() => generateStrip());

      setStrips((prev) => [...prev, ...newStrips]);
    };

    spawnStrips(); // initial
    const spawnInterval = setInterval(spawnStrips, 2500);

    return () => clearInterval(spawnInterval);
  }, []);

  // Clean up old strips after 5s
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
    <div className='absolute inset-0 z-[-3] pointer-events-none overflow-hidden'>
      {strips.map((strip) => (
        <div
          key={strip.id}
          className='absolute w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500 animate-stripOnce'
          style={{
            left: `${strip.left}px`,
            top: `${strip.top}px`,
            height: `${strip.height}px`,
            animationDuration: `${strip.duration}s`,
            opacity: strip.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FallingStrips;
