import { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "#1e3a8a",
      "#2563eb",
      "#3b82f6",
      "#60a5fa",
      "#93c5fd",
      "#c084fc",
      "#f472b6",
      "#facc15",
    ];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${circle.x - 10}px`;
        circle.style.top = `${circle.y - 10}px`;
        circle.style.opacity = (1 - index / circles.length).toFixed(2);
        circle.style.backgroundColor = colors[index % colors.length] + "CC"; // CC = ~80% opacity in hex
        const scale = 1 - index * 0.04;
        circle.style.transform = `scale(${scale})`;

        circle.style.opacity = (1 - index / circles.length).toFixed(2);

        circle.style.scale = 1 - index * 0.03;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.25;
        y += (nextCircle.y - y) * 0.25;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  // Hide on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {Array(20)
        .fill()
        .map((_, i) => (
          <div key={i} className='circle'></div>
        ))}
    </>
  );
};

export default CustomCursor;
