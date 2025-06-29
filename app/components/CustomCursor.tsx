"use client";
import { useEffect, useState } from "react";

interface CursorProps {
  glowColor?: string;
  glowRadius?: number;
}

export default function CustomCursor({
  glowColor = "rgba(50, 87, 162 ,0.3)",
  glowRadius = 250,
}: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-10"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: glowRadius * 2,
          height: glowRadius * 2,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
