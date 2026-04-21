import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-72 h-72 
      bg-blue-500/20 rounded-full blur-3xl z-0 transition duration-300"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`
      }}
    ></div>
  );
}
